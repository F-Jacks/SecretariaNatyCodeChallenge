import TextField from '@mui/material/TextField';

interface Props {
    name: string,
    value: string | number | Date,
    setValue?: any,
    type?: "text" | "password" | "email" | "date" | "number" | "tel",
    placeholder?: string
}


const Input = (props: Props) => {
    return (
        <div>
            <TextField
                id={props.name}
                label={props.name}
                value={props.value}
                // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                //     props.setValue(event.target.value);
                // }}
                type={props.type}
                placeholder={props.placeholder}
                fullWidth
            />
        </div>
    );
};


export default Input;