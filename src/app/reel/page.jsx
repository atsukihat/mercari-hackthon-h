"use client";

import React, { useEffect, useRef } from "react";

const videos = ["/image/video1.mp4", "/image/video2.mp4", "/image/video3.mp4"];

const VideoSwiper = () => {
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

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

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll bg-black"
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <div className="max-w-[430px] mx-auto h-full">
        {videos.map((src, index) => (
          <div
            key={index}
            className="h-screen flex items-center justify-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={src}
              className="w-full h-full object-cover"
              style={{
                aspectRatio: "9/16",
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