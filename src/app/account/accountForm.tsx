import { form } from "@/mocks/update";
import { TDict } from "@/types/common";
import { TUser } from "@/types/user";
import Form from "../components/form/form";

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
                    url={`${form[props.user.type].url}/${props.user.id}`}
                    inputs={form[props.user.type].inputs}
                    method={form[props.user.type].method}
                    callbackSucess={sucessUpdate}
                    callbackError={errorUpdate}
                    submitText="update"
                    defaultValues={props.userInputs}
                    className="flex flex-col gap-6 md:grid md:grid-cols-2"
                    submitClassName="col-span-2"
                />
            }
        </section>
    );
};

export default AccountForm;