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
            const inputType = props.inputs.find(inp => inp.name === name)?.apiType;
          return {
          ...prevData,
          [`${inputType ? inputType : 'body'}__${name}`]: value.toString()
        }});
    };

    const fillFormData = (type: "body" | "query" | "param" | "header", data: { [key: string]: string }, formValuesTuple: [string, string][]) => {
        formValuesTuple.forEach(([key, val]) => {
          const [typeVal, trueVal] = key.split("__");;
        
          if (typeVal === type) {
            data[trueVal] = val;
          }
        })
    }

    const send = (e: React.FormEvent) => {
        e.preventDefault();

        if(!canSend) return;

        setCanSend(false);

        const formValuesTuple: [string, string][] = Object.entries(formValues);
        const body: { [key: string]: string } = {};
        fillFormData("body", body, formValuesTuple);
        const query: { [key: string]: string } = {};
        fillFormData("query", query, formValuesTuple);
        const param: { [key: string]: string } = {};
        fillFormData("param", param, formValuesTuple);
        const header: { [key: string]: string } = {};
        fillFormData("header", header, formValuesTuple);

        const paramString = Object.values(param).join('/');
        const queryString = Object.entries(query)
            .map(([key, value]) => `${key}=${value}`)
            .join('&&');

        const atrs = {
            method: props.method,
            url: `${props.url}/${paramString && paramString+'/'}${queryString && '?'+queryString+'/'}`,
            data: body,
            headers: header
        };

        axios(atrs).then((res) => {
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