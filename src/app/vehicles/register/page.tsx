"use client"

import Form from "@/app/components/form/form";
import { form } from "@/mocks/vehicles";
import { TDict } from "@/types/common";
import { redirect } from 'next/navigation'

const Register = () => {
    const sucessRegister = (data: TDict) => {
        console.log("sucess");
        setTimeout(() => redirect('/'), 300)
    };

    const errorRegister = () => {
        console.log("error");
    }


    return (
        <section className="w-full mt-[60px] ltmd:mt-[68px] flex items-center justify-center h-full grow mx-auto px-[5%] max-w-4xl">
            <Form 
                url={form.url}
                inputs={form.inputs}
                method={form.method}
                callbackSucess={sucessRegister}
                callbackError={errorRegister}
                submitText="register"
                className="flex flex-col gap-6 md:grid md:grid-cols-2"
                submitClassName="col-span-2"
            />
        </section>
    );
};


export default Register;