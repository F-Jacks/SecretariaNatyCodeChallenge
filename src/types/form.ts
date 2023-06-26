

export interface IInput {
    type: "text" | "password" | "email" | "date" | "number" | "tel",
    name: string,
    className?: string,
    placeholder?: string
};

export interface IInputForm extends IInput {
    apiType?: "body" | "query" | "param" | "header"
}

export interface IForm {
    inputs: IInputForm[];
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
}
export type TFormConst = {
    [key in 'driver' | 'rider']: IForm;
};