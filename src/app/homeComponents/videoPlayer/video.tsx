import { src } from "@/mocks/home/videoPlayer";

const Video = () => {
    return (
        <iframe 
            src={src} 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            title="YouTube Video"
        >
        </iframe>
    );
};


export default Video;