import About from "./about";
import Background from "./background";
import ContinueReading from "./continueReading";
import Links from "./links";


const Apresentation = () => {
    return (
        <section className="h-[85vh] w-full pt-[3.25rem] pb-4 px-[5%] relative border-b-2 flex flex-col justify-between items-center">
            <Background />
            <About />
            <Links />
            <ContinueReading />
        </section>
    );
};

export default Apresentation;