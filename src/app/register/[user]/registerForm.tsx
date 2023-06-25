"use client"

import { form } from "@/mocks/register";
import Form from "../../components/form";


interface Props {
    user: 'driver' | 'rider'
}

const RegisterForm = (props: Props) => {
    const sucessRegister = (data: {}) => {
        console.log(data)
    }

    const errorRegister = () => {
        console.log('error')
    }

    return (
        <section className="w-full mx-auto px-[5%] max-w-4xl">
            <Form 
                url={form[props.user].url}
                inputs={form[props.user].inputs}
                method={form[props.user].method}
                callbackSucess={sucessRegister}
                callbackError={errorRegister}
            />
        </section>
    );
};


export default RegisterForm;