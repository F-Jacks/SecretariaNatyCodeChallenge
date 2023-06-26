import Form from "../components/form";
import { form } from "@/mocks/update";
import { TDict } from "@/types/common";
import { TUser } from "@/types/user";

interface Props {
    user: TUser,
    userInputs: TDict
}


const AccountForm = (props: Props) => {
    const sucessUpdate = (data: TDict) => {

    }

    const errorUpdate = () => {

    }


    return (
        <section className="w-full mx-auto px-[5%] max-w-4xl">
            {
                Object.keys(props.userInputs).length > 0 && props.user &&
                <Form 
                    url={`${form[props.user.type].url}/${props.user.id}/`}
                    inputs={form[props.user.type].inputs}
                    method={form[props.user.type].method}
                    callbackSucess={sucessUpdate}
                    callbackError={errorUpdate}
                    submitText="update"
                    defaultValues={props.userInputs}
                />
            }
        </section>
    );
};

export default AccountForm;