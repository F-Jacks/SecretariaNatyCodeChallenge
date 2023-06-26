"use client"

import LinkButton from "@/app/components/linkButton";
import { clientLink } from "@/mocks/home/apresentation";
import { link } from "@/mocks/home/price";
import { runLink } from "@/mocks/user";
import userAtom from "@/states/user";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";



const Link = () => {
    const user = useRecoilValue(userAtom);
    const [linkProps, setLinkProps] = useState<any>({href: clientLink.link, text: link});

    useEffect(() => {
        if (user) {
            setLinkProps({
                href: runLink[user.type].link,
                text: runLink[user.type].text
            });
        } else {
            setLinkProps({
                href: clientLink.link, 
                text: link
            });
        }
    }, [user]);
    
    return (
        <LinkButton
            href={linkProps.href}
            isFilled
        >
            {linkProps.text}
        </LinkButton>
    );
};


export default Link;