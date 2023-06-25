"use client"

import { form } from "@/mocks/login";
import Form from "../../components/form";


interface Props {
    user: 'driver' | 'rider'
}

const LoginForm = (props: Props) => {
    const sucessLogin = (data: {}) => {
        console.log(data)
    }

    const errorLogin = () => {
        console.log('error')
    }

    return (
        <section className="w-full mx-auto px-[5%] max-w-4xl">
            <Form 
                url={form[props.user].url}
                inputs={form[props.user].inputs}
                method={form[props.user].method}
                callbackSucess={sucessLogin}
                callbackError={errorLogin}
            />
        </section>
    );
};


export default LoginForm;