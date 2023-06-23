"use client"

import TextField from '@mui/material/TextField';

interface Props {
    className?: string,
    name: string,
    value: string | number | Date,
    setValue: React.Dispatch<React.SetStateAction<string | number | Date>>,
    type?: "text" | "password" | "email" | "date" | "number" | "tel",
    placeholder?: string
}


const Input = (props: Props) => {
    return (
        <div className={props.className}>
            <TextField
                id={props.name}
                label={props.name}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                fullWidth
                variant="filled"
                sx={{
                    "& .MuiFilledInput-root": {
                    borderColor: 'white',
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    "& .MuiFilledInput-underline:before": {
                    borderBottomColor: 'white',
                    },
                    "& .MuiInputLabel-root": {
                    color: 'white',
                    },
                }}
                onChange={(event) => props.setValue(event.target.value)}
            />
        </div>
    );
};


export default Input;