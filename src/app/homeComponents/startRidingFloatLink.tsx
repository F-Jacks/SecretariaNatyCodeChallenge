"use client"

import LinkButton from "../components/linkButton";
import { clientLink } from "@/mocks/home/apresentation";
import { title } from "@/mocks/home/price";
import { runLink } from "@/mocks/user";
import userAtom from "@/states/user";
import classNames from "classnames";
import { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";


const StartRidingFloatLink = () => {
    const user = useRecoilValue(userAtom);
    const [active, setActive] = useState(false);
    let link = {
        href: user && runLink[user.type] ? runLink[user.type].link : clientLink.link,
        text: user && runLink[user.type] ? runLink[user.type].text : title
    }

    useLayoutEffect(() => {
      const bottomElement = document.getElementById("priceSection");
      const topElement = document.getElementById("continueReadingDiv");

      if (!topElement || !bottomElement) return;

      const handleScroll = () => {
        const onBottom = bottomElement.getBoundingClientRect().top - window.innerHeight;
        setActive(topElement.getBoundingClientRect().bottom <= 0 && onBottom > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <div className={classNames({
        ["fixed bottom-0 w-full h-fit transform transition-transform duration-250"]: true,
        ["translate-y-0"]: active,
        ["translate-y-[100%]"]: !active
      })}>
        <LinkButton href={link.href} className="w-full" isFilled>
          { link.text } 
        </LinkButton>
      </div>
    );
};


export default StartRidingFloatLink;