import Image from "next/image";

const Comfort = () => {
    return (
        <section
            className="w-full px-[5%] flex relative lg:mx-auto"
        >
            <Image 
                src={""}
                alt={""}
                width={594}
                height={807}
                className="absolute w-[269px] h-[198px] lg:h-[396px] lg:w-[538px] 2xl:h-[594px] 2xl:w-[807px] top-0 right-0 lg:top-1/2 lg:mr-[5%] lg:-translate-y-1/2"
            />
            <div
                className="bg-[#0076E3] rounded-md w-full mt-[94px]  2xl:h-[594px] xl:mt-0 lg:pr-[5%] h-1/2 p-8 grid grid-rows-[94px_auto] grid-columns-[auto_269px]"
            >
                <h2 className="text-white row-start-1">
                    {"Comfort"}
                </h2>
                <p className="text-white row-start-2 col-span-2">
                    {'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris feugiat ipsum vel pharetra scelerisque. Aliquam quis massa vel tellus consectetur volutpat vel vitae mauris. Nulla facilisi. Vestibulum auctor, lectus id suscipit posuere, enim justo vulputate velit, et rhoncus ligula dui ac purus. Phasellus id lobortis orci, id tempor sem. Sed sed aliquam tellus. In auctor, risus vel volutpat tincidunt, neque odio lacinia lectus, ut dapibus leo tortor non elit.'}
                </p>
            </div>
        </section>
    );
};


export default Comfort;