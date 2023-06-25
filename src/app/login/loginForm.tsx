"use client"

import Form from "../components/form";

const LoginForm = () => {
    const sucessLogin = (data: {}) => {
        console.log(data)
    }

    const errorLogin = () => {
        console.log('error')
    }

    return (
        <section>
            <Form 
                url={"https://api-deslocamento.herokuapp.com/api/v1/Cliente"}
                inputs={[
                    { name: "id", type: "number", apiType: "param" },
                ]}
                method={"get"}
                callbackSucess={sucessLogin}
                callbackError={errorLogin}
            />
        </section>
    );
};


export default LoginForm;