"use client"

import TextField from '@mui/material/TextField';
import { IInput } from './form';

interface Props extends IInput {
    setValue: ((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void),
    value: string | number | Date
}


const Input = (props: Props) => {
    return (
        <div className={props.className}>
            <TextField
                name={props.name}
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
                onChange={props.setValue}
            />
        </div>
    );
};


export default Input;