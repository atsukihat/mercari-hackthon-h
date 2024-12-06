"use client";

import React, { useEffect, useRef, useState } from "react";

// 動画とタイトルの配列
const videos = [
    { src: "/image/video1.mp4", title: "株式会社ポポマーケットではあああああああああああああああああああ" },
    { src: "/image/video2.mp4", title: "株式会社セブンナインではあああああああああああああああああああ" },
    { src: "/image/video3.mp4", title: "株式会社アパではあああああああああああああああああああ" },
];

//めっも
const VideoSwiper = () => {
    const videoRefs = useRef([]);
    const containerRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.95,
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video);
        });

        return () => {
            videoRefs.current.forEach((video) => {
                if (video) observer.unobserve(video);
            });
        };
    }, []);

    const handleOpenModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    return (
        <div
            ref={containerRef}
            className="h-screen overflow-y-scroll bg-black relative"
            style={{
                scrollSnapType: "y mandatory",
                scrollBehavior: "smooth",
            }}
        >
            {/* Video Swiper Section */}
            <div className="max-w-[430px] mx-auto h-full relative">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="h-screen flex flex-col items-center justify-center relative"
                        style={{
                            scrollSnapAlign: "start",
                        }}
                    >
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={video.src}
                            className="w-full h-full object-cover"
                            style={{
                                aspectRatio: "9/16",
                            }}
                            muted
                            loop
                            playsInline
                        />
                        {/* 説明テキストとボタン部分 */}
                        <div
                            className="absolute flex items-center justify-between w-full px-4"
                            style={{
                                bottom: "15%", // 動画のフッダーから少し上に配置微調整中やった
                                maxWidth: "400px",
                            }}
                        >
                            <p className="text-white text-sm flex-1">{video.title}</p>
                            <button
                                onClick={() => handleOpenModal(`詳細情報: ${video.title}`)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-4"
                            >
                                続きを見る
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* モーダルセクション */}
            {isModalOpen && (
                <div
                    id="modal"
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end transition-opacity z-20"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        id="modalContent"
                        className="bg-white w-full max-w-md p-6 rounded-t-2xl shadow-lg transform transition-transform"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold">📝 詳細情報</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                &times;
                            </button>
                        </div>
                        <p className="mt-4 text-gray-600">{modalContent}</p>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            応募する
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoSwiper;
