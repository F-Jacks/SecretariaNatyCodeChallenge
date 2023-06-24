import { imageSrc, text, title } from "@/mocks/home/forWho";

const ForWho = () => {
    return (
        <section 
            className={`w-full h-[50vh] bg-cover bg-no-repeat bg-center`}
            style={{
                backgroundImage: `url(${imageSrc.src})`
            }}
        >
            <h2 className="text-white text-center text-xl mb-12 mt-24">
                {title}
            </h2>
            <p className="text-white text-center text-sm">
                {text}
            </p>
        </section>
    );
};


export default ForWho;