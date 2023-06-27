"use client"

import HomeRedirectorUser from "@/middlewares/homeRedirector";
import userAtom from "@/states/user";
import { useRecoilValue } from "recoil";
import Weather from "./wheather";
import Run from "./run";
import Map from "./map";

const Desloc = () => {
    const user = useRecoilValue(userAtom);


    return (
        <>
            <Map />
            <Run />
            <Weather />
            <HomeRedirectorUser />
        </>
    );
};


export default Desloc;