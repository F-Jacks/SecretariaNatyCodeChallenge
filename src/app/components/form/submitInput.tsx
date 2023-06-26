interface Props {
    submitText: string
}


const SubmitInput = (props: Props) => {
    return (
        <input 
            type="submit" 
            value={props.submitText}
            className="border-[#0076E3] bg-[#0076E3] cursor-pointer p-2 text-base h-10 min-w-[10rem] w-full mx-auto flex justify-center items-center border-2"
        />
    );
};


export default SubmitInput;