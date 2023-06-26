"use client"

import { useState } from "react";
import Input from "../components/input";
import axios from "axios";
import classNames from "classnames";
import { IForm, TApiType } from "@/types/form";
import { errorMessage } from "@/mocks/form";
import { TDict, TDictTuple } from "@/types/common";

interface Props extends IForm {
    callbackSucess: (data: TDict) => void,
    callbackError: () => void,
    className?: string,
    children?: React.ReactNode,
    active?: boolean,
    submitText: string,
    defaultValues?: TDict
}


const Form = (props: Props) => {
    const getInitialFormValues = () => {
        const initialFormValues: TDict = {};

        props.inputs.forEach(inp => {
            initialFormValues[`${inp.apiType ? inp.apiType : 'body'}__${inp.name}`] = ''
        });

        return initialFormValues;
    };


    const [formValues, setFormValues] = useState<TDict>(
        props.defaultValues ? { ...props.defaultValues } : getInitialFormValues()
    );
    const [canSend, setCanSend] = useState(true);
    const [error, setError] = useState(false);


    const makeIndex = (inputType: string | undefined, name: string) => (
        `${inputType ? inputType : 'body'}__${name}`
    );


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormValues((old) => {
          const inputType = props.inputs.find(inp => inp.name === name)?.apiType;

          const index = makeIndex(inputType, name);

          return {
            ...old,
            [index]: value.toString()
          };
        });
        setError(false);
    };

    const fillFormData = (type: TApiType, data: TDict, formValuesTuple: TDictTuple) => {
        formValuesTuple.forEach(([key, val]) => {
          const [typeVal, trueVal] = key.split("__");;
        
          if (typeVal === type) {
            data[trueVal] = val;
          }
        })
    }

    const handleError = () => {
        setError(true);
        props.callbackError();
    }
    
    const _makeAtrs = () => {
        const formValuesTuple: TDictTuple = Object.entries(formValues);
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

        return atrs;
    }

    const _sendReq = () => {
        const atrs = _makeAtrs();

        axios(atrs).then((res) => {
            if (res.status === 200) {
                props.callbackSucess(res.data);
            } else {
                handleError();
            }
        }).catch((_) => {
            handleError();
        }).finally(() => {
            setCanSend(true);
        });
    }

    const send = (e: React.FormEvent) => {
        e.preventDefault();

        if(!canSend || !props.active === false) return;

        setCanSend(false);

        _sendReq();  
    };


    return (
        <form 
            onSubmit={send}
            className={classNames({
                ['h-fit w-full']: true,
                [props.className || 'flex flex-col gap-y-6']: true
            })}
        >
            <span className={classNames({
                ['bg-red-700 text-white text-base text-center bottom-0 fixed p-2 w-full left-0 transform transition-transform duration-250']: true,
                ['translate-y-[100%]']: !error,
                ['translate-y-0']: error
            })}>
                {errorMessage}
            </span>
            {
                props.inputs.map((inp, idx) => (
                    <Input
                        key={idx}
                        setValue={handleInputChange}
                        value={formValues[`${inp.apiType ? inp.apiType : 'body'}__${inp.name}`]}
                        {...inp}
                        active={!canSend || !props.active === false}
                        error={error}
                    />
                ))
            }
            { props.children }
            <input 
                type="submit" 
                value={props.submitText}
                className="border-[#0076E3] bg-[#0076E3] cursor-pointer p-2 text-base h-10 min-w-[10rem] w-full mx-auto flex justify-center items-center border-2"
            />
        </form>
    );
};


export default Form;