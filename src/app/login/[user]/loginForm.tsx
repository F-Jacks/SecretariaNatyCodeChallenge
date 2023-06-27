"use client"

import { form } from "@/mocks/login";
import { useSetRecoilState } from "recoil";
import userAtom from "@/states/user";
import { TDict } from "@/types/common";
import { TUserType } from "@/types/user";
import Form from "@/app/components/form/form";
import { useRouter } from "next/navigation";


export const errorLogin = () => {
    console.log('error login');
}


interface Props {
    user: TUserType
}


const LoginForm = (props: Props) => {
    const router = useRouter();
    const setUser = useSetRecoilState(userAtom);

    const sucessLogin = (data: TDict) => {
        const newUser = {
            id: parseInt(data['id']),
            nome: data['nome'],
            type: props.user
        };
        setUser(newUser);
        router.push('/');
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