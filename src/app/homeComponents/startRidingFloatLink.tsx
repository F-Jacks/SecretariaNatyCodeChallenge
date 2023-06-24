"use client"


import startRidingFloatLinkAtom from "@/states/startRidingFloatLink";
import { useRecoilValue } from "recoil";
import LinkButton from "../components/linkButton";
import { clientLink } from "@/mocks/home/apresentation";
import { title } from "@/mocks/home/price";
import classNames from "classnames";


const StartRidingFloatLink = () => {
    const startRidingFloatLink = useRecoilValue(startRidingFloatLinkAtom);

    return (
      <div className={classNames({
        ["fixed bottom-0 w-full h-fit transform transition-transform duration-250"]: true,
        ["translate-y-0"]: !startRidingFloatLink.end && startRidingFloatLink.start,
        ["translate-y-[100%]"]: startRidingFloatLink.end || !startRidingFloatLink.start
      })}>
        <LinkButton href={clientLink.link} className="w-full" isFilled>
          {title} 
        </LinkButton>
      </div>
    );
};


export default StartRidingFloatLink;