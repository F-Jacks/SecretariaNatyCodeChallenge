import Form from "../components/form";

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
            <section>
                <Form 
                    url={"https://api-deslocamento.herokuapp.com/api/v1/Cliente/"}
                    inputs={[]}
                    method={"get"} callbackSucess={function (data: object): void {
                        throw new Error("Function not implemented.");
                    } } callbackError={function (): void {
                        throw new Error("Function not implemented.");
                    } }                />
            </section>
        </>
    );
};


export default SignRedirect;