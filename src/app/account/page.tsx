"use client"

import Image from 'next/image';
import AccountForm from './accountForm';
import { useRecoilState, useRecoilValue } from 'recoil';
import userAtom from '@/states/user';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { form } from '@/mocks/update';
import { TDict } from '@/types/common';
import { deleteIcon, deleteTitle } from '@/mocks/account';
import { redirect } from 'next/navigation'
import SvgIcon from '@mui/material/SvgIcon';
import headerLoadedAtom from '@/states/header';


const Account = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const [userInputs, setUserInputs] = useState<TDict>({});
    const headerLoaded =  useRecoilValue(headerLoadedAtom);

    const _makeNewUserInputs = (data: TDict) => {
        if (!user) return;

        const newUserInputs: TDict = {};
        const dictInputs = Object.entries(data);

        dictInputs.forEach(inp => {
            const trueInp = form[user.type].inputs.find(input => input.name === inp[0]);
            if (trueInp) {
                newUserInputs[`${trueInp.apiType || "body"}__${trueInp.name}`] = `${inp[1]}`;
            }
        });

        setUserInputs(newUserInputs);
    }

    const getUserInfosFail = () => {
        setUserInputs({});
        setUser(null);
        redirect('/');
    };

    useEffect(() => {
        if (!headerLoaded) return;

        if (user) {
            const userType = user.type === 'rider' ? 'Cliente' : 'Condutor';

            axios.get(`https://api-deslocamento.herokuapp.com/api/v1/${userType}/${user.id}`)
                .then((res) => {
                    if (res.status === 200) {
                        _makeNewUserInputs(res.data);
                    } else {
                        getUserInfosFail();
                    }
                }).catch((_) => {
                    getUserInfosFail();
                })
        } else {
            getUserInfosFail();
        }
    }, [user]);

    return (
        <>
            <section>
                <h1>
                    {/* <Image
                        src={}
                        alt={}
                        width={}
                        height={}
                        className=""
                    /> */}
                </h1>
                {/* <p>
                    {}
                </p>
                <p>
                    {}
                </p> */}
            </section>
            <AccountForm 
                user={user}
                userInputs={userInputs}
            />
            <section className='w-full max-w-xs mx-auto px-[5%] flex justify-between items-center'>
                <span className='text-[rgba(255,255,255,0.4)] '>
                    {deleteTitle}
                </span>
                <button
                    className='bg-red-700 h-8 w-8 rounded-[8px]'
                >
                    <SvgIcon 
                        component={deleteIcon} 
                        inheritViewBox 
                    />
                </button>
            </section>
        </>
    );
};

export default Account;