import { deleteIcon, deleteTitle } from "@/mocks/account";
import SvgIcon from "@mui/material/SvgIcon";

const Delete = () => {
    return (
        <section className='w-full max-w-xl mx-auto px-[5%] flex justify-between items-center'>
            <span className='text-[rgba(255,255,255,0.4)] '>
                {deleteTitle}
            </span>
            <button
                className='bg-red-700 h-8 w-8 rounded-[8px]'
            >
                <SvgIcon 
                    component={deleteIcon} 
                    inheritViewBox 
                />
            </button>
        </section>
    );
};


export default Delete;