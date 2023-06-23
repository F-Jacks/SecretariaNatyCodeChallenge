import Image from "next/image";

const Comfort = () => {
    return (
        <section
            className="w-full flex relative px-[2.5%]"
        >
            <Image 
                src={""}
                alt={""}
                width={594}
                height={807}
                className="absolute w-[269px] h-[198px] shadow-xl z-20 rounded-md lg:h-[396px] lg:w-[538px] lg:row-start-1 lg:row-end-2 2xl:h-[594px] 2xl:w-[807px] top-0 right-[2.5%] lg:top-1/2 lg:-translate-y-1/2"
            />
            <div
                className="bg-[#0076E3] rounded-md w-full mt-[94px] lg:min-h-[396px] 2xl:items-center 2xl:min-h-[594px] xl:mt-0 h-auto p-8 grid grid-rows-[94px_30px_1fr] lt:grid-rows-[94px_auto] lt:grid-cols-[auto_240px] lg:grid-cols-[1fr_538px] 2xl:grid-cols-[1fr_807px]"
            >
                <h2 className="text-white text-xl row-start-2 mb-16 lt:mb-0 lt:row-start-1">
                    {"Comfort"}
                </h2>
                <p className="text-sm text-white row-start-3 lt:row-start-2 col-span-2 lg:col-span-1">
                    {'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris feugiat ipsum vel pharetra scelerisque. Aliquam quis massa vel tellus consectetur volutpat vel vitae mauris. Nulla facilisi. Vestibulum auctor, lectus id suscipit posuere, enim justo vulputate velit, et rhoncus ligula dui ac purus. Phasellus id lobortis orci, id tempor sem. Sed sed aliquam tellus. In auctor, risus vel volutpat tincidunt, neque odio lacinia lectus, ut dapibus leo tortor non elit.'}
                </p>
            </div>
        </section>
    );
};


export default Comfort;