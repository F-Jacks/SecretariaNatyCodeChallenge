import { image, text, title } from "@/mocks/home/security";
import Image from "next/image";

const Security = () => {
    return (
        <section
            className="w-full flex flex-col gap-12 px-[5%] items-center"
        >
            <Image 
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                placeholder="blur"
            />
            <div className="flex flex-col gap-12 items-center">
                <h2 className="text-center text-white">
                    {title}
                </h2>
                <p className="text-center text-white">
                    {text}
                </p>
            </div>
        </section>
    );
};


export default Security;