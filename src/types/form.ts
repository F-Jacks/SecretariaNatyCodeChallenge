export interface IInput {
    type: "text" | "password" | "email" | "date" | "number" | "tel",
    name: string,
    className?: string,
    placeholder?: string
};

export type TApiType = "body" | "query" | "param" | "header";

export interface IInputForm extends IInput {
    apiType?: TApiType
}

export interface IForm {
    inputs: IInputForm[];
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
}

export type TFormConst = {
    [key in 'driver' | 'rider']: IForm;
};