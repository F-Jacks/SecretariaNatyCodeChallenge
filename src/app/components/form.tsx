"use client"


import { useState } from "react";
import Input from "../components/input";
import axios from "axios";

export type TFormValues = {
    [key: string]: string;
};

export interface IInput {
    type: "text" | "password" | "email" | "date" | "number" | "tel",
    name: string,
    className?: string,
    placeholder?: string
};

interface IInputForm extends IInput {
    apiType?: "body" | "query" | "param" | "header"
}

interface Props {
    inputs: IInputForm[],
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    callbackSucess: (data: object) => void,
    callbackError: () => void
}


const Form = (props: Props) => {
    const [formValues, setFormValues] = useState<TFormValues>({});
    const [canSend, setCanSend] = useState(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prevData) => {
            const inputType = props.inputs.find(inp => inp.name === name)?.type;
          return {
          ...prevData,
          [`${inputType ? inputType : 'body'}__${name}`]: value.toString()
        }});
    };

    const fillFormData = (type: "body" | "query" | "param" | "header", data: { [key: string]: string }, formValuesTuple: [string, string][]) => {
        for (const [key, val] of formValuesTuple) {
            const [trueVal, typeVal] = val.split("__");

          if (typeVal === type) {
            data[key] = trueVal;
          }
        }
    }

    const send = (e: React.FormEvent) => {
        e.preventDefault();

        if(!canSend) return;

        setCanSend(false);

        const formValuesTuple: [string, string][] = Object.entries(formValues);
        const body: { [key: string]: string } = {};
        fillFormData()
        const query: { [key: string]: string } = {};
        const param: { [key: string]: string } = {};
        const header: { [key: string]: string } = {};

        axios({
            method: props.method,
            url: props.url,
            data: formValues,
        }).then((res) => {
            if (res.status === 200) {
                props.callbackSucess(res.data);
            } else {
                props.callbackError();
            }
        }).catch((_) => {
            props.callbackError();
        }).finally(() => {
            setCanSend(true);
        });
    }

    return (
        <form onSubmit={send}>
            {
                props.inputs.map((inp, idx) => (
                    <Input
                        key={idx}
                        setValue={handleInputChange}
                        value={formValues[inp.name]}
                        {...inp}
                    />
                ))
            }
            <input 
                type="submit" 
                value="login"
                className="border-[#0076E3] bg-[#0076E3] cursor-pointer p-2 text-base h-10 min-w-[10rem] w-full mx-auto flex justify-center items-center border-2"
            />
        </form>
    );
};


export default Form;