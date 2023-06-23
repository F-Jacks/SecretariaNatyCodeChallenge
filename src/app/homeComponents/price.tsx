import Link from "next/link";

const Price = () => {
    return (
        <section className="w-fit mx-auto px-[5%]">
            <div className="p-4 border">
                <div className="flex mb-12 gap-x-8 gap-y-4 mx-auto flex-col-reverse justify-center items-center lt:flex-row">
                    <h3 className="text-base">
                        {"The best medium economic option for your monthly budget"}
                    </h3>
                    <span className="text-4xl text-black break-keep whitespace-nowrap bg-white p-4 w-28 h-[4.5rem] fles items-center justify-center">
                        {'30 $'}
                    </span>
                </div>
                <h2 className="text-xl w-full text-center mb-12">
                    {'Start riding now'}
                </h2>
                <Link
                    href={"/"}
                    className="border-[#0076E3] bg-[#0076E3] p-2 text-base h-10 min-w-[10rem] w-3/5 mx-auto flex justify-center items-center border-2"
                >
                    {"Prices"}
                </Link>
            </div>
        </section>
    );
};


export default Price;