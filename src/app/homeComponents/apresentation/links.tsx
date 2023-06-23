import { clientLink, driverLink } from "@/mocks/home/apresentation";
import Link from "next/link";

const Links = () => {
    return (
        <div className="gap-y-[1.6rem] flex flex-col justify-between w-full max-w-2xl row-start-3">
            <Link
                href={clientLink.link}
                className="border-[#0076E3] bg-[#0076E3] p-2 text-base h-10 min-w-[10rem] w-3/5 mx-auto flex justify-center items-center border-2"
            >
                {clientLink.text}
            </Link>
            <Link
                href={driverLink.link}
                className="border-[#0076E3] border-2 h-10 text-base p-2 min-w-[10rem] w-3/5 mx-auto flex justify-center items-center"
            >
                {driverLink.text}
            </Link>
        </div>
    );
};


export default Links;