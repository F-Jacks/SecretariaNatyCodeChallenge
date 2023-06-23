interface Props {
    name: string,
    value: string | number | Date
}


const Input = (props: Props) => {
    return (
        <div>
            <TextField
                id={props.name}
                label={props.name}
                value={props.value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                }}
            />
        </div>
    );
};