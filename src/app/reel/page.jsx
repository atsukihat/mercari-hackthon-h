"use client";

import React, { useEffect, useRef } from "react";

// 動画のパスを配列で管理
const videos = [
    "/image/video1.mp4",
    "/image/video2.mp4",
    "/image/video3.mp4",
];

const VideoSwiper = () => {
    // useRefを使用して各動画のDOM参照を保持
    const videoRefs = useRef([]);

    useEffect(() => {
        // IntersectionObserverの設定
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8,
        };

        // 動画の表示状態を監視して再生・停止を切り替える関数
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                const video = entry.target; // 現在監視対象の動画
                if (entry.isIntersecting) {
                    video.play(); // 表示されている動画を再生
                } else {
                    video.pause(); // 非表示の場合は一時停止
                    video.currentTime = 0; // 再生位置をリセット
                }
            });
        };

        // IntersectionObserverのインスタンスを生成
        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        // 各動画にObserverを適用
        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video);
        });

        // コンポーネントがアンマウントされたときにObserverを解除
        return () => {
            videoRefs.current.forEach((video) => {
                if (video) observer.unobserve(video);
            });
        };
    }, []);

    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black">
            {/* スマートフォンサイズを意識したコンテナ */}
            <div className="max-w-[430px] mx-auto">
                {videos.map((src, index) => (
                    <div
                        key={index}
                        className="h-screen snap-start flex items-center justify-center"
                    >
                        <video
                            ref={(el) => (videoRefs.current[index] = el)} // 各動画のDOM参照を保持
                            src={src}
                            className="w-full h-[calc(100vh-80px)] object-cover rounded-lg"
                            style={{
                                aspectRatio: "9/16",
                                maxHeight: "calc(100vh - 80px)",
                            }}
                            muted
                            loop
                            playsInline
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoSwiper;