"use client"

import { form } from "@/mocks/login";
import Form from "../../components/form";
import { useSetRecoilState } from "recoil";
import userAtom from "@/states/user";
import { TFormValues } from "@/types/form";


export const errorLogin = () => {
    console.log('error login');
}


interface Props {
    user: 'driver' | 'rider'
}


const LoginForm = (props: Props) => {
    const setUser = useSetRecoilState(userAtom);

    const sucessLogin = (data: TFormValues) => {
        const newUser = {
            id: parseInt(data['id']),
            nome: data['nome'],
            type: props.user
        };
        setUser(newUser);
    }

    return (
        <section className="w-full mx-auto px-[5%] max-w-4xl">
            <Form 
                url={form[props.user].url}
                inputs={form[props.user].inputs}
                method={form[props.user].method}
                callbackSucess={sucessLogin}
                callbackError={errorLogin}
                submitText="login"
            />
        </section>
    );
};


export default LoginForm;