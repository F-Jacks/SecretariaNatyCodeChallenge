import Review from './review';


const Reviews = () => {
    const reviews = [
        {
            image: {src:"", alt:""},
            text: "Always drives me fast and stratight to the point",
            author: "Jackson"
        },
        {
            image: {src:"", alt:""},
            text: "Always drives me fast and stratight to the point",
            author: "Jackson"
        },
        {
            image: {src:"", alt:""},
            text: "Always drives me fast and stratight to the point",
            author: "Jackson"
        },
        {
            image: {src:"", alt:""},
            text: "Always drives me fast and stratight to the point",
            author: "Jackson"
        }
    ]

    return (
        <section className='w-full px-[5%]'>
            <h2 className="mb-12 text-black w-fit text-center bg-white p-4 mx-auto">
                {"Best Reviews in drivers market"}
            </h2>
            <ul className='mx-auto w-full flex flex-col gap-y-8'>
                {
                    reviews.map((rw, index) => (
                        <Review 
                            key={index}
                            image={rw.image}
                            text={rw.text}
                            author={rw.author}
                            side={index % 2 === 0 ? "right" : "left"}
                        />
                    ))
                }
            </ul>
        </section>
    );
};


export default Reviews;