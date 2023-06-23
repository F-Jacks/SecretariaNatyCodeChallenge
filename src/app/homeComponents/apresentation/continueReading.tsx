import { continueReadingIcon, continueReadingText } from "@/mocks/home/apresentation";

const ContinueReading = () => {
    return (
        <div 
            className="w-1/2 gap-y-[0.8rem] max-w-2xl min-w-[10rem] flex flex-col items-center row-start-4 cursor-pointer"
        >
            <span className="text-sm text-white">
                {continueReadingText}
            </span>
            <span className="w-full h-[2px] block bg-white" />
            <button className="text-white h-5 w-5 p-[2px] flex justify-center items-center bg-[#0076E3] text-[16px]">
                {continueReadingIcon}
            </button>
        </div>
    );
};


export default ContinueReading;