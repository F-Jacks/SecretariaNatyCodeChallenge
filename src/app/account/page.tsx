"use client"

import Image from 'next/image';
import AccountForm from './accountForm';
import { useRecoilValue } from 'recoil';
import userAtom from '@/states/user';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { form } from '@/mocks/update';
import { TDict } from '@/types/common';


const Account = () => {
    const user = useRecoilValue(userAtom);
    const [userInputs, setUserInputs] = useState<TDict>({});

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

    useEffect(() => {
        if (user) {
            const userType = user.type === 'rider' ? 'Cliente' : 'Condutor';

            axios.get(`https://api-deslocamento.herokuapp.com/api/v1/${userType}/${user.id}`)
                .then((res) => {
                    if (res.status === 200) {
                        _makeNewUserInputs(res.data);
                    } else {
                        setUserInputs({});
                    }
                }).catch((_) => {
                    setUserInputs({});
                })
        } else {
            setUserInputs({});
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
            {/* <section>
                <span>
                    {}
                </span>
                <button
                
                >
                    {}
                </button>
            </section> */}
        </>
    );
};

export default Account;