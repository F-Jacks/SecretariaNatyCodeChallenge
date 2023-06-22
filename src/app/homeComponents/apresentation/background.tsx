const Background = () => {
    return (
        <div className="absolute h-full w-full top-0 left-0 -z-10">
            <video 
                autoPlay 
                muted 
                loop 
                className="object-cover w-full h-full absolute overflow-hidden top-0 left-0 opacity-60 -z-10"
            >
                <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4" type="video/mp4" />
            </video>
        </div>
    );
};


export default Background;