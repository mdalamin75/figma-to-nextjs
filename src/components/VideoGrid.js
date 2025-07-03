import React from "react";

export default function VideoGrid({ sources = [
    "/video/video1.mp4",
    "/video/video2.mp4",
    "/video/video3.mp4",
    "/video/video4.mp4"
] }) {
    return (
        <div className="bg-white rounded-2xl p-2 flex flex-col items-center justify-center shadow-md">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-[320px] h-[220px] sm:w-[400px] sm:h-[270px] md:w-[440px] md:h-[300px]">
                {sources.slice(0, 4).map((src, idx) => (
                    <video
                        key={idx}
                        src={src}
                        className="rounded-lg object-cover w-full h-full"
                        controls={false}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ))}
            </div>
        </div>
    );
} 