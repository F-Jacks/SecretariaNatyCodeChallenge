"use client"

import AccountForm from './accountForm';
import { useRecoilState, useRecoilValue } from 'recoil';
import userAtom from '@/states/user';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { form } from '@/mocks/update';
import { TDict, TDictTuple } from '@/types/common';
import { redirect } from 'next/navigation'
import headerLoadedAtom from '@/states/header';
import FixedInfos from './fixedInfos';
import Delete from './delete';
import { loadingText } from '@/mocks/account';


const Account = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const [userInputs, setUserInputs] = useState<TDict>({});
    const [fixedInfos, setFixedInfos] =  useState<TDictTuple>([]);
    const headerLoaded =  useRecoilValue(headerLoadedAtom);


    const _makeNewUserInputs = (data: TDict) => {
        if (!user) return;

        const newUserInputs: TDict = {};
        const newFixedInputs: TDictTuple = [];

        const dictInputs = Object.entries(data);

        dictInputs.forEach(inp => {
            const trueInp = form[user.type].inputs.find(input => input.name === inp[0]);
            if (trueInp) {
                newUserInputs[`${trueInp.apiType || "body"}__${trueInp.name}`] = `${inp[1]}`;
            } else {
                newFixedInputs.push(inp);
            }
        });

        setUserInputs(newUserInputs);
        setFixedInfos(newFixedInputs);
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
    }, [user, headerLoaded]);

    return (
        <div className='flex items-center justify-center gap-y-8 flex-col h-full w-full grow mt-[60px] ltmd:mt-[68px]'>
            {
                user && headerLoaded ?
                <>
                    <FixedInfos 
                        fixedInfos={fixedInfos}
                        user={user}
                    />
                    <AccountForm 
                        user={user}
                        userInputs={userInputs}
                    />
                    <Delete />
                </> : 
                <div className='text-2xl'>
                    {loadingText}
                </div>
            }
        </div>
    );
};

export default Account;