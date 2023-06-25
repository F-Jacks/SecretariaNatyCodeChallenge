import LoginForm from "./loginForm";

interface Props {
    params: {
        user: 'driver' | 'rider'
    }
}


const SignRedirect = ({params}: Props) => {
    return (
        <>
            <section>
            </section>
            <LoginForm />
        </>
    );
};


export default SignRedirect;