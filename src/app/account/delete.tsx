"use client"

import { deleteCofirm, deleteTitle } from "@/mocks/account";
import { useState } from "react";
import TransitionsModal from "../components/modal";
import axios from "axios";
import userAtom from "@/states/user";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import DelButton from "../components/delButton";


const Delete = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useRecoilState(userAtom);
    const [deleted, setDeleted] = useState(false);
    const [error, setError] = useState(false);


    const handleDelete = () => {
        if (!user) return;

        const url = `${deleteCofirm.url}${user.type === 'rider' ? 'Client' : 'Condutor'}/${user.id}/`;

        axios.delete(url, {data:{id: user.id}}).then((res) => {
            console.log(res)
            setOpen(false);
            setUser(null);
            setDeleted(true);
            setError(false);
            router.push('/');
        }).catch((_) => {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        });
    };

    return (
        <section className='w-full max-w-xl mx-auto px-[5%] flex justify-between items-center'>
            <span className='text-[rgba(255,255,255,0.4)] '>
                {deleteTitle}
            </span>
            <DelButton 
                onClick={() => setOpen(true)}
            />
            <TransitionsModal
                open={open}
                setOpen={setOpen}
            >
                {
                    deleted ?
                    <span className="text-green-600 text-xl flex justify-center items-center w-full h-full">
                        DELETED
                    </span> :
                    <>
                        <div className={classNames({
                            ["max-h-[45vh] overflow-auto border-2 p-2 relative"]: true,
                            ["border-red-700"]: error,
                            ["border-transparent"]: !error
                        })}>
                            <div className="flex flex-col gap-y-4 h-full">
                                <p className="text-sm text-center">
                                    {deleteCofirm.title}
                                </p>
                                <p className="text-sm">
                                    {deleteCofirm.text}
                                </p>
                                <button 
                                    className="w-full bg-red-900 h-10"
                                    onClick={() => handleDelete()}
                                >
                                    {deleteCofirm.textSubmit}
                                </button>
                            </div>
                        </div>
                        {
                            error &&
                            <span className="absolute top-[2rem] left-[2rem] text-red-700 w-full max-w-[calc(100%-7rem)]">
                                {deleteCofirm.errorText}
                            </span>
                        }
                    </>
                }
            </TransitionsModal>
        </section>
    );
};


export default Delete;