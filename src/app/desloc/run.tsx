"use client"

import SvgIcon from "@mui/icons-material/DoubleArrow";
import Form from "../components/form/form";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import BackHandIcon from '@mui/icons-material/BackHand';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { useState } from "react";
import classNames from "classnames";
import { form } from "@/mocks/desloc";
import { TDict } from "@/types/common";
import axios from "axios";

const Run = () => {
    const [open, setOpen] = useState(false);
    const [deslocId, setDeslocId] = useState<number | null>(null);

    const sucessUpdate = (data: TDict) => {
        setDeslocId(data as unknown as number);
    }

    const errorUpdate = () => {
        console.log('error');
    }


    const finish = () => {
        const url = `https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/${deslocId}/EncerrarDeslocamento`;
        const data = {
            id: deslocId,
            kmFinal: Math.floor(Math.random() * 10000) + 1,
            fimDeslocamento: (new Date()).toISOString(),
            observacao: "",
        };

        console.log(data)

        axios.put(url, data).then(res => {
            setDeslocId(null);
            setOpen(false);
        }).catch((_) => {
            console.log('error');
        });
    };


    return (
        <section className="bg-black rounded-[8px] absolute top-[calc(2rem+60px)] ltmd:top-[calc(2rem+68px)] left-[2rem] flex gap-x-4 flex-col px-2 w-[calc(100%-4rem)] z-20">
            <h1 className="text-2xl pr-16 text-white text-center">
                {"start desloc"}
            </h1>
            {
                !deslocId ?
                <>
                    <span 
                        className="bg-[#0076E3] rounded-full p-2 flex justify-center items-center h-10 w-10 absolute top-3 right-[2rem]"
                        onClick={() => setOpen(!open)}
                    >
                        <SvgIcon 
                            component={!open ? DoubleArrowIcon : BackHandIcon} 
                            viewBox="0 0 24 24" 
                        />
                    </span>
                    <div className={classNames({
                        ["w-full overflow-hidden"]: true,
                        ["h-0"]: !open,
                        ["h-auto"]: open
                    })}>
                        <div className="h-fit p-4">
                            <Form 
                                url={`${form.url}`}
                                inputs={form.inputs}
                                method={form.method}
                                callbackSucess={sucessUpdate}
                                callbackError={errorUpdate}
                                submitText="start run"
                                className="flex flex-col gap-6 md:grid md:grid-cols-2"
                                submitClassName="col-span-2"
                            />
                        </div>
                    </div>
                </> : 
                <span 
                    className="bg-green-800 rounded-full p-2 flex justify-center items-center h-10 w-10 absolute top-3 right-[2rem]"
                    onClick={() => finish()}
                >
                    <SvgIcon 
                        component={SportsScoreIcon} 
                        viewBox="0 0 24 24" 
                    />
                </span>
            }
        </section>
    );
};


export default Run;