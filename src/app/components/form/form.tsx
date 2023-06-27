"use client"

import { useCallback, useState } from "react";
import Input from "./input";
import axios from "axios";
import classNames from "classnames";
import { IForm } from "@/types/form";
import { TDict, TDictOfDicts } from "@/types/common";
import ErrorMessage from "./errorMessage";
import SubmitInput from "./submitInput";

interface Props extends IForm {
    callbackSucess: (data: TDict) => void,
    callbackError: () => void,
    className?: string,
    children?: React.ReactNode,
    active?: boolean,
    submitText: string,
    defaultValues?: TDict,
    submitClassName?: string
}

const makeIndex = (inputType: string | undefined, name: string) => (
    `${inputType ? inputType : 'body'}__${name}`
);

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


    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        let trueValue: any = value;
        if (e.target.type === "number") {
            trueValue = parseInt(value);
        }
    
        setFormValues((old) => {
          const inputType = props.inputs.find(inp => inp.name === name)?.apiType;
    
          const index = makeIndex(inputType, name);
    
          return {
            ...old,
            [index]: trueValue
          };
        });
        setError(false);
    }, [props.inputs]);

    const handleError = () => {
        setError(true);
        props.callbackError();
    }

    const send = (e: React.FormEvent) => {
        const _makeAtrs = () => {
            const formValuesTuple = Object.entries(formValues);

            const data: TDictOfDicts = {
                body: {},
                query: {},
                param: {},
                header: {}
            };
              
            formValuesTuple.forEach(([key, val]) => {
                const [typeVal, trueVal] = key.split("__");
              
                if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(val)) {
                    const [year, month, day, hour, minute] = val.split(/[-T:]/);

                    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
                    
                    data[typeVal as keyof typeof data][trueVal] = dateObj.toISOString();
                } else {
                    data[typeVal as keyof typeof data][trueVal] = val;
                }
            });
    
            const paramString = Object.values(data.param).join('/');
            const queryString = Object.entries(data.query)
                .map(([key, value]) => `${key}=${value}`)
                .join('&&');
    
            const atrs = {
                method: props.method,
                url: `${props.url}/${paramString && paramString+'/'}${queryString && '?'+queryString+'/'}`,
                data: data.body,
                headers: data.header
            };
    
            return atrs;
        }
    
        const _sendReq = () => {
            const atrs = _makeAtrs();

            console.log(atrs)

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

        setError(false);

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
                submitClassName={props.submitClassName}
            />
        </form>
    );
};


export default Form;