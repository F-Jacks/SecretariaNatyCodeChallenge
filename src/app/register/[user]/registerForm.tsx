"use client"

import { form } from "@/mocks/register";
import axios from "axios";
import userAtom from "@/states/user";
import { useSetRecoilState } from "recoil";
import { errorLogin } from "@/app/login/[user]/loginForm";
import { TDict } from "@/types/common";
import { TUserType } from "@/types/user";
import Form from "@/app/components/form/form";
import { useRouter } from "next/navigation";


interface Props {
    user: TUserType
}

const RegisterForm = (props: Props) => {
    const router = useRouter();
    const setUser = useSetRecoilState(userAtom);
    

    const sucessRegister = (data: TDict) => {
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
                setUser(newUser);
                router.push('/');
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
        <section className="w-full mx-auto px-[5%] max-w-6xl">
            <Form 
                url={form[props.user].url}
                inputs={form[props.user].inputs}
                method={form[props.user].method}
                callbackSucess={sucessRegister}
                callbackError={errorRegister}
                submitText="register"
                className="flex flex-col gap-6 md:grid md:grid-cols-2"
                submitClassName="col-span-2"
            />
        </section>
    );
};


export default RegisterForm;