import { StaticImageData } from "next/image";

export interface IReview {
    image: {src: StaticImageData, alt: string},
    text: string,
    author: string
}