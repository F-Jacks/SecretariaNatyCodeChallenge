import { backgroundImage } from "@/mocks/desloc";
import Image from "next/image";

const Map = () => {
    return (
        <section className="mt-[60px] ltmd:mt-[68px] h-[calc(100vh-60px)] ltmd:h-[calc(100vh-68px)] min-h-[35rem] w-full relative">
            <Image 
                src={backgroundImage.src}
                alt={backgroundImage.alt}
                fill
                className="object-cover w-full h-full absolute overflow-hidden top-0 left-0 -z-10"
            />
        </section>
    );
};


export default Map;