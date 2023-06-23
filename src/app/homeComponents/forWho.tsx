import { text, title } from "@/mocks/home/forWho";

const ForWho = () => {
    return (
        <section className="w-full border h-[50vh]">
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