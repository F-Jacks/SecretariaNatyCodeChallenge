"use client"

import { redirect } from 'next/navigation'
import React from 'react';
import userAtom from "@/states/user";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const HomeRedirectorUser = () => {
    const user = useRecoilValue(userAtom);

    useEffect(() => {
        if (user) {
            redirect('/');
        }
    }, [user]);

    return (
        <>
        </>
    );
};


export default HomeRedirectorUser;