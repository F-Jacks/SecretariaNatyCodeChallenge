import LinkButton from "@/app/components/linkButton";
import { clientLink, driverLink } from "@/mocks/home/apresentation";

const Links = () => {
    return (
        <div className="gap-y-[1.6rem] flex flex-col justify-between w-full max-w-2xl row-start-3">
            <LinkButton
                href={clientLink.link}
                isFilled
            >
                {clientLink.text}
            </LinkButton>
            <LinkButton
                href={driverLink.link}
            >
                {driverLink.text}
            </LinkButton>
        </div>
    );
};


export default Links;