import { text, title } from "@/mocks/home/apresentation";

const About = () => {
    return (
        <div className="w-full max-w-5xl row-start-2 flex flex-col justify-between">
            <h1 className="text-6xl text-center text-white">
                {title}
            </h1>
            <p className="text-sm text-white">
                {text}
            </p>
        </div>
    );
};

export default About;