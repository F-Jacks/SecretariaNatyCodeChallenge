import { errorMessage } from "@/mocks/form";
import classNames from "classnames";

interface Props {
    error: boolean
}


const ErrorMessage = (props: Props) => {
    return (
        <span className={classNames({
            ['bg-red-700 text-white text-base text-center bottom-0 fixed p-2 w-full left-0 transform transition-transform duration-250']: true,
            ['translate-y-[100%]']: !props.error,
            ['translate-y-0']: props.error
        })}>
            {errorMessage}
        </span>
    );
};


export default ErrorMessage;