"use client"

import userAtom from "@/states/user";
import { redirect } from "next/navigation";
import { useRecoilState } from "recoil";


const Logout = () => {
    const [user, setUser] = useRecoilState(userAtom);

    setUser(null);
    redirect('/');

    return (
        <>
        </>
    );
};


export default Logout;