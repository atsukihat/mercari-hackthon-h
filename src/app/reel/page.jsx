"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

//a
// 動画とタイトルの配列
const videos = [
<<<<<<< HEAD
  {
    src: "/image/video1.mp4",
    title: "飯田珈琲店の田中です。ドリップと",
  },
  {
    src: "/image/video2.mp4",
    title:
      "株式会社ハロシェアでは、スクリーン操作や会場の設営を説明したいと思います。",
  },
  {
    src: "/image/video3.mp4",
    title: "株式会社高谷です。欠品の補充の",
  },
];
=======
    {
      src: "/image/video1.mp4",
      title: "飯田物件店の中です。今日",
    },
    {
      src: "/image/video2.mp4",
      title: "株式会社セブンナインであぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁ",
    },
    {
      src: "/image/video3.mp4",
      title: "株式会社アパではぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁぁ",
    },
  ];
>>>>>>> origin/main

const VideoSwiper = () => {
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isFinishOpen, setIsFinishOpen] = useState(false);

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
          // 現在の動画を再生
          video.play();
          // 他の動画をミュート
          videoRefs.current.forEach((v) => {
            if (v !== video) {
              v.pause();
              v.currentTime = 0;
            }
          });
        } else {
          // 表示外の動画を停止
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

  // 応募ボタンで confirm dialog を表示
  const handleApply = () => {
    setIsModalOpen(false); // モーダルを閉じる
    setIsConfirmOpen(true); // Confirm Dialog を開く
  };

  // 応募完了で finish dialog を表示
  const handleFinish = () => {
    setIsConfirmOpen(false); // モーダルを閉じる
    setIsFinishOpen(true); // finish Dialog を開く
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
              onClick={handleApply} // Confirm Dialog を開く関数を呼び出す
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              応募
            </button>
          </div>
        </div>
      )}

      {/* 確認ダイアログセクション */}
      <Dialog
        open={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">応募確認</DialogTitle>
            <Description>
              応募を完了しますか？この操作は取り消せません。
            </Description>
            <div className="flex gap-4">
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                キャンセル
              </button>
              <button
                onClick={handleFinish}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                応募を完了する
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* 完了ダイアログセクション */}
      <Dialog
        open={isFinishOpen}
        onClose={() => setIsFinishOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">
              応募が完了しました。
            </DialogTitle>
            <div className="flex gap-4"></div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default VideoSwiper;
