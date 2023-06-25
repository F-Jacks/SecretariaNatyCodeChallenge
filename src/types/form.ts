export type TFormValues = {
    [key: string]: string;
};

export interface IInput {
    type: "text" | "password" | "email" | "date" | "number" | "tel",
    name: string,
    className?: string,
    placeholder?: string
};

export interface IInputForm extends IInput {
    apiType?: "body" | "query" | "param" | "header"
}