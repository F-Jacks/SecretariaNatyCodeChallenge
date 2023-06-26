import { IReview, TReviewSide } from "@/types/home";
import classNames from "classnames";
import Image from "next/image";

interface Props extends IReview {
    side: TReviewSide
}


const Review = (props: Props) => {
    return (
        <li className={classNames({
            ['flex w-full gap-x-[15%] md:gap-x-[25%] items-center justify-center']: true,
            ['flex-row-reverse']: props.side === "right"
        })}>
            <Image 
                src={props.image.src}
                alt={props.image.alt}
                width={320}
                height={320}
                className='w-14 min-w-[3.5rem] rounded-full row-span-2 h-14 md:w-28 md:h-28 lg:w-36 lg:h-36 2xl:w-52 2xl:h-52'
                placeholder="blur"
            />
            <blockquote>
                <p className="text-white text-sm row-start-1 col-start-2 mb-4">
                    {props.text}
                </p>
                <footer className={classNames({
                    ["text-white text-lg row-start-2 col-start-2"]: true,
                    ["w-fit ml-auto"]: props.side === "right"
                })}>
                    {props.author}
                </footer>
            </blockquote>
        </li>
    );
};


export default Review;