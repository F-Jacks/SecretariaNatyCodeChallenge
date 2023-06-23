"use client"


import { lazy, Suspense } from "react";
const Video = lazy(() => import('./video'));

const VideoPlayer = () => {
    return (
        <section className="aspect-w-16 aspect-h-9 w-full cursor-pointer">
            <Suspense fallback={
                <div className="w-full h-full flex justify-center items-center text-white">
                    Loading...
                </div>
            }>
                <Video />
            </Suspense>
        </section>
    );
};


export default VideoPlayer;