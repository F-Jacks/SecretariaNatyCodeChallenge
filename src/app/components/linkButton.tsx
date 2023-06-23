import classNames from "classnames";
import Link from "next/link";

interface Props {
    href: string,
    className?: string,
    isFilled?: boolean,
    children: React.ReactNode
}


const LinkButton = (props: Props) => {
    return (
        <Link
            href={props.href}
            className={classNames({
                ["border-[#0076E3] p-2 text-base h-10 min-w-[10rem] w-3/5 mx-auto flex justify-center items-center border-2"]: true,
                [props.className || ""]: true,
                ["bg-[#0076E3]"]: props.isFilled
            })}
        >
            {props.children}
        </Link>
    );
};


export default LinkButton;