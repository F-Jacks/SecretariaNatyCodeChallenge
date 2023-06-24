"use client"

import LinkButton from "../components/linkButton";
import { clientLink } from "@/mocks/home/apresentation";
import { title } from "@/mocks/home/price";
import classNames from "classnames";
import { useLayoutEffect, useState } from "react";


const StartRidingFloatLink = () => {
    const [active, setActive] = useState(false);

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
        <LinkButton href={clientLink.link} className="w-full" isFilled>
          {title} 
        </LinkButton>
      </div>
    );
};


export default StartRidingFloatLink;