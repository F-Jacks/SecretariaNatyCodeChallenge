"use client"

import LinkButton from "@/app/components/linkButton";
import { clientLink, driverLink } from "@/mocks/home/apresentation";
import { runLink } from "@/mocks/user";
import userAtom from "@/states/user";
import { useRecoilValue } from "recoil";


const Links = () => {
    const user = useRecoilValue(userAtom);


    return (
        <div className="gap-y-[1.6rem] flex flex-col justify-between w-full max-w-2xl row-start-3">
            {
                !user ?
                <>
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
                </> :
                <>
                    <LinkButton
                        href={runLink[user.type].link}
                        isFilled
                    >
                        {runLink[user.type].text}
                    </LinkButton>
                </>
            }
        </div>
    );
};


export default Links;