import { reviews, title } from '@/mocks/home/reviews';
import Review from './review';


const Reviews = () => {
    return (
        <section className='w-full px-[5%]'>
            <h2 className="mb-12 text-black w-fit text-center bg-white p-4 mx-auto">
                {title}
            </h2>
            <ul className='mx-auto w-full max-w-6xl flex flex-col gap-y-8'>
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