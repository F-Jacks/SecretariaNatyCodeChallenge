import { amount, text, title, link } from "@/mocks/home/price";
import LinkButton from "../components/linkButton";


const Price = () => {
    return (
        <section 
            className="w-fit mx-auto px-[5%]"
            id={"priceSection"}
        >
            <div className="p-4 border">
                <div className="flex mb-12 gap-x-8 gap-y-4 mx-auto flex-col-reverse justify-center items-center lt:flex-row">
                    <h3 className="text-base">
                        {text}
                    </h3>
                    <span className="text-4xl text-black break-keep whitespace-nowrap bg-white p-4 w-28 h-[4.5rem] fles items-center justify-center">
                        {amount}
                    </span>
                </div>
                <h2 className="text-xl w-full text-center mb-12">
                    {title}
                </h2>
                <LinkButton
                    href={link.href}
                    isFilled
                >
                    {link.text}
                </LinkButton>
            </div>
        </section>
    );
};


export default Price;