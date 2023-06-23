import Image from 'next/image';


const Reviews = () => {
    return (
        <section>
            <h2 className="mb-12 text-black text-center bg-white p-12">
                {"Best Reviews in drivers market"}
            </h2>
            <ul>
                <li className='grid grid-cols-[auto_1fr] grid-rows-[1fr_auto]'>
                    <Image 
                        src={""}
                        alt={""}
                        width={120}
                        height={120}
                        className='w-14 h-14 md:w-28 md:h-28'
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