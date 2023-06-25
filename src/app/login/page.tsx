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
                    url={"https://api-deslocamento.herokuapp.com/api/v1/Cliente"}
                    inputs={[
                        {name: "id", type: "number", apiType: "param"},
                        {name: "name", type: "text"},
                        {name: "id2", type: "number", apiType: "query"},
                    ]}
                    method={"get"}             
                    />
            </section>
        </>
    );
};


export default SignRedirect;