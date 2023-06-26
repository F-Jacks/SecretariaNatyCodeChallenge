"use client"

import { useState } from "react";
import Input from "./input";
import axios from "axios";
import classNames from "classnames";
import { IForm, TApiType } from "@/types/form";
import { TDict, TDictTuple } from "@/types/common";
import ErrorMessage from "./errorMessage";
import SubmitInput from "./submitInput";

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

    const send = (e: React.FormEvent) => {
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
            <ErrorMessage 
                error={error}
            />
            {
                props.inputs.map((inp, idx) => {
                    const inpIndex = makeIndex(inp.apiType, inp.name);

                    return <Input
                        key={idx}
                        setValue={handleInputChange}
                        value={formValues[inpIndex]}
                        {...inp}
                        active={!canSend || !props.active === false}
                        error={error}
                    />
                })
            }
            { props.children }
            <SubmitInput 
                submitText={props.submitText}
            />
        </form>
    );
};


export default Form;