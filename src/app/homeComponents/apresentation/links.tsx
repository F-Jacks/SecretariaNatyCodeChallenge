import Link from "next/link";

const Links = () => {
    return (
        <div className="grow flex flex-col justify-between w-full">
            <Link
                href={"/"}
                className="border-[#0076E3] bg-[#0076E3] p-2 text-base h-10 min-w-[10rem] w-1/3 mx-auto flex justify-center items-center border-2"
            >
                {"Im Client"}
            </Link>
            <Link
                href={"/"}
                className="border-[#0076E3] border-2 h-10 text-base p-2 min-w-[10rem] w-1/3 mx-auto flex justify-center items-center"
            >
                {"Im Driver"}
            </Link>
        </div>
    );
};


export default Links;