import { image, text, title } from "@/mocks/home/comfort";
import Image from "next/image";

const Comfort = () => {
    return (
        <section
            className="w-full flex relative px-[2.5%]"
        >
            <Image 
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="absolute w-[269px] h-[198px] shadow-xl z-20 rounded-md lg:h-[396px] lg:w-[538px] lg:row-start-1 lg:row-end-2 2xl:h-[594px] 2xl:w-[807px] top-0 right-1/2 translate-x-1/2 lt:translate-x-[0%] lt:right-[2.5%] lg:top-1/2 lg:-translate-y-1/2"
                placeholder="blur"
            />
            <div
                className="bg-[#0076E3] rounded-md w-full mt-[94px] lg:min-h-[396px] 2xl:items-center 2xl:min-h-[594px] xl:mt-0 h-auto p-8 grid gap-y-4 lt:gap-y-0 grid-rows-[94px_30px_1fr] grid-cols-1 lt:grid-rows-[94px_auto] lt:grid-cols-[auto_240px] lg:grid-cols-[1fr_538px] 2xl:grid-cols-[1fr_807px]"
            >
                <h2 className="text-white text-xl row-start-2 mx-auto lt:row-start-1">
                    {title}
                </h2>
                <p className="text-sm text-center text-white row-start-3 lt:row-start-2 col-span-2 lg:col-span-1">
                    {text}
                </p>
            </div>
        </section>
    );
};


export default Comfort;