"use client"

import { form } from "@/mocks/register";
import Form from "../../components/form";
import { TFormValues } from "@/types/form";
import axios from "axios";
import userAtom from "@/states/user";
import { useSetRecoilState } from "recoil";
import { errorLogin } from "@/app/login/[user]/loginForm";


interface Props {
    user: 'driver' | 'rider'
}

const RegisterForm = (props: Props) => {
    const setUser = useSetRecoilState(userAtom);
    

    const sucessRegister = (data: TFormValues) => {
        const id = data
        const url = `${form[props.user].url}/${id}/`;

        const atrs = {
            method: 'get',
            url: url
        }

        axios(atrs).then((res) => {
            if (res.status === 200) {
                const newUser = {
                    id: parseInt(res.data['id']),
                    nome: res.data['nome'],
                    type: props.user
                }
                setUser(newUser)
            } else {
                errorLogin();
            }
        }).catch((_) => {
            errorLogin();
        })
    }

    const errorRegister = () => {
        console.log('error register');
    }

    return (
        <section className="w-full mx-auto px-[5%] max-w-4xl">
            <Form 
                url={form[props.user].url}
                inputs={form[props.user].inputs}
                method={form[props.user].method}
                callbackSucess={sucessRegister}
                callbackError={errorRegister}
                submitText="register"
            />
        </section>
    );
};


export default RegisterForm;