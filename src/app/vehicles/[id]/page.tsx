"use client"


import Form from "@/app/components/form/form";
import { loadingText } from "@/mocks/account";
import { updateForm } from "@/mocks/vehicles";
import { TDict, TDictTuple } from "@/types/common";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    params: {
        id: number
    }
}


const Vehicle = (props: Props) => {
    const router = useRouter();
    const [inputs, setInputs] = useState<TDict>({});
    const [fixedInfos, setFixedInfos] =  useState<TDictTuple>([]);


    const _makeNewInputs = (data: TDict) => {
        const newInputs: TDict = {};
        const newFixedInputs: TDictTuple = [];

        const dictInputs = Object.entries(data);

        dictInputs.forEach(inp => {
            const trueInp = updateForm.inputs.find(input => input.name === inp[0]);
            if (trueInp !== undefined && trueInp !== null) {
                newInputs[`${trueInp.apiType || "body"}__${trueInp.name}`] = `${inp[1]}`;
            } else {
                newFixedInputs.push(inp);
            }
        });

        setInputs(newInputs);
        setFixedInfos(newFixedInputs);
    }

    const getInfosFail = () => {
        router.push('/vehicles');
    };

    useEffect(() => {
        axios.get(`https://api-deslocamento.herokuapp.com/api/v1/Veiculo/${props.params.id}`)
        .then((res) => {
            if (res.status === 200) {
                _makeNewInputs(res.data);
            } else {
                getInfosFail();
            }
        }).catch((_) => {
            getInfosFail();
        })
    }, []);

    const sucessUpdate = (data: TDict) => {

    }

    const errorUpdate = () => {

    }

    return (
        <div className='flex items-center justify-center gap-y-8 flex-col h-full w-full grow mt-[60px] ltmd:mt-[68px] mx-auto px-[5%] max-w-4xl'>
            {
                Object.entries(inputs).length > 0 ?
                <>
                    <h1 className="flex flex-col gap-2">
                        {
                            fixedInfos.map((inf, idx) => (
                                <span
                                    key={idx}
                                    className="text-white text-center text-base"
                                >
                                    {inf[1]}
                                </span>
                            ))
                        }
                    </h1>
                    <Form 
                        url={`${updateForm.url}/${props.params.id}`}
                        inputs={updateForm.inputs}
                        method={updateForm.method}
                        callbackSucess={sucessUpdate}
                        callbackError={errorUpdate}
                        submitText="update"
                        defaultValues={inputs}
                        className="flex flex-col gap-6 md:grid md:grid-cols-2"
                        submitClassName="col-span-2"
                    />
                </> : 
                <div className='text-2xl'>
                    {loadingText}
                </div>
            }
        </div>
    );
};


export default Vehicle;