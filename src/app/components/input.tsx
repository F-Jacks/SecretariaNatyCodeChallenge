import { IInput } from '@/types/form';
import TextField from '@mui/material/TextField';

interface Props extends IInput {
    setValue: ((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void),
    value: string | number | Date,
    active?: boolean
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
                disabled={props.active}
                sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    "& .MuiFilledInput-root": {
                        borderColor: 'white',
                        color: 'white',
                    },
                    "& .MuiFilledInput-root:hover": {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    "& .MuiFilledInput-underline:before": {
                        borderBottomColor: 'white',
                    },
                    "& .MuiInputLabel-root": {
                        color: 'white',
                    },
                    // "& .Mui-disabled .MuiFilledInput-root": {
                    //     backgroundColor: 'white',
                    // },
                }}
                onChange={props.setValue}
            />
        </div>
    );
};


export default Input;