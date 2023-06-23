import Image from 'next/image';


const Reviews = () => {
    return (
        <section className='w-full px-[2.5%]'>
            <h2 className="mb-12 text-black w-fit text-center bg-white p-4 mx-auto">
                {"Best Reviews in drivers market"}
            </h2>
            <ul className='max-w-[35rem] mx-auto w-full'>
                <li className='grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] w-full gap-y-8'>
                    <Image 
                        src={""}
                        alt={""}
                        width={320}
                        height={320}
                        className='w-14 h-14 md:w-28 md:h-28 lg:w-36 lg:h-36 2xl:w-64 2xl:h-64'
                    />
                    <p>
                        {"Always drives me fast and stratight to the point."}
                    </p>
                    <h3>
                        {"Jackson"}
                    </h3>
                </li>
            </ul>
        </section>
    );
};


export default Reviews;