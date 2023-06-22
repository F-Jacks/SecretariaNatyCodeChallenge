import About from "./about";
import Background from "./background";
import ContinueReading from "./continueReading";
import Links from "./links";


const Apresentation = () => {
    return (
        <section className="h-[85vh] min-h-[55rem] w-full pt-[3.25rem] pb-4 px-[5%] relative border-b-2 grid grid-rows-[1fr_2fr_15%_15%] gap-y-8 justify-items-center z-0 items-center">
            <Background />
            <About />
            <Links />
            <ContinueReading />
        </section>
    );
};

export default Apresentation;