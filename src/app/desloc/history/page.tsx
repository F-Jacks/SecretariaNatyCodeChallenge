"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import Container from "./container";
import { useRecoilValue } from "recoil";
import userAtom from "@/states/user";
import headerLoadedAtom from "@/states/header";
import { useRouter } from "next/navigation";

const History = () => {
    const router = useRouter();

    const [deslocs, setDeslocs] = useState<[]>([]);
    const user = useRecoilValue(userAtom);
    const headerLoaded =  useRecoilValue(headerLoadedAtom);

    useEffect(() => {
      const getdesloc = async () => {
        try {
          const response = await axios.get('https://api-deslocamento.herokuapp.com/api/v1/Deslocamento');
          setDeslocs(response.data.reverse());
        } catch (error) {
          console.log('Error while trying to fetch desloc');
        }
      };
  
      getdesloc();
    }, []);

    useEffect(() => {
        if (!user && headerLoaded) {
            router.push('/');
        }
    }, [user, headerLoaded]);

    return (
        <>
            <section className="w-full mt-[60px] ltmd:mt-[68px] h-full mx-auto px-[5%] max-w-4xl">
                <h1 className="mb-12 text-black w-fit text-center bg-white p-4 mx-auto">
                    {"your deslocs"}
                </h1>
            </section>
            <section className="w-full h-full mx-auto px-[5%] max-w-4xl">
                <ul className='flex items-center justify-center flex-col gap-y-8'>
                    {deslocs.map((v: any, idx) => {
                        if (user && (v.idCondutor === user.id || v.idCliente === user.id)) {
                            return <Container 
                                key={idx} 
                                {...v} 
                            />
                        }
                    })}
                </ul>
            </section>
        </>
    );
};

export default History;