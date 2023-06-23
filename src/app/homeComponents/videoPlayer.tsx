import { src } from "@/mocks/home/videoPlayer";

const VideoPlayer = () => {
    return (
        <section className="aspect-w-16 aspect-h-9 w-full bg-white">
            <iframe src={src} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </section>
    );
};


export default VideoPlayer;