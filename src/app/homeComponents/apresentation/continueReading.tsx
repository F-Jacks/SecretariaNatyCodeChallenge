"use client"


import { continueReadingIcon, continueReadingText } from "@/mocks/home/apresentation";
import startRidingFloatLinkAtom from "@/states/startRidingFloatLink";
import { useLayoutEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";

const ContinueReading = () => {
    const componenteRef = useRef<HTMLDivElement>(null);
    const setStartRidingFloatLink = useSetRecoilState(startRidingFloatLinkAtom);
    const [isBottom, setIsBottom] = useState(false);

    useLayoutEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting && isBottom) {
              setStartRidingFloatLink({
                start: true,
                end: false
              });
            } else {
              setStartRidingFloatLink({
                start: false,
                end: false
              });
            }
          });
        });
      
        const handleScroll = () => {
          if (componenteRef.current) {
            const componentePosicao = componenteRef.current.getBoundingClientRect().bottom;
            setIsBottom(componentePosicao <= 0);
          }
        };
      
        if (componenteRef.current) {
          observer.observe(componenteRef.current);
          window.addEventListener('scroll', handleScroll);
        }
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
          observer.disconnect();
        };
    }, [isBottom]);


    return (
        <div 
            className="w-1/2 gap-y-[0.8rem] max-w-2xl min-w-[10rem] flex flex-col items-center row-start-4 cursor-pointer"
            ref={componenteRef}
        >
            <span className="text-sm text-white">
                {continueReadingText}
            </span>
            <span className="w-full h-[2px] block bg-white" />
            <button className="text-white h-5 w-5 p-[2px] flex justify-center items-center bg-[#0076E3] text-[16px]">
                {continueReadingIcon}
            </button>
        </div>
    );
};


export default ContinueReading;