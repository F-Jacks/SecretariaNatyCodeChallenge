import { deleteIcon, deleteTitle } from "@/mocks/account";
import SvgIcon from "@mui/material/SvgIcon";
import { useState } from "react";
import TransitionsModal from "../components/modal";

const Delete = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className='w-full max-w-xl mx-auto px-[5%] flex justify-between items-center'>
            <span className='text-[rgba(255,255,255,0.4)] '>
                {deleteTitle}
            </span>
            <button
                className='bg-red-700 h-8 w-8 rounded-[8px]'
                onClick={() => setOpen(true)}
            >
                <SvgIcon 
                    component={deleteIcon} 
                    inheritViewBox 
                />
            </button>
            <TransitionsModal
                open={open}
                setOpen={setOpen}
            >
                <div className="max-h-[45vh] overflow-auto">
                    <p>{"khiugipogoluilu"}</p>
                    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur elit vitae mauris consectetur, non eleifend nisi finibus. Sed ut malesuada risus. Nullam quis nisi vitae dolor ultricies consectetur. Pellentesque fringilla, velit a rutrum iaculis, nulla ipsum gravida eros, a accumsan tellus velit nec lacus. Proin ac purus id est consectetur porttitor a eu tellus. Morbi posuere, mauris at ultrices tristique, arcu risus lacinia elit, vitae pulvinar neque metus id nisl. Nullam eget est eu justo pellentesque consequat. Aliquam sagittis libero id enim pharetra, eu tincidunt lectus luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris a scelerisque lacus. Sed interdum, urna a hendrerit sagittis, dui enim luctus mauris, ut condimentum odio lectus sed felis. Maecenas suscipit arcu quis gravida aliquam.

Nullam hendrerit, nulla sed interdum hendrerit, ex justo hendrerit libero, et dictum risus ex sed enim. Integer convallis libero quis neque ultrices, et consequat est ultricies. Nullam rutrum ullamcorper ipsum, sed tincidunt justo feugiat sed. Morbi eu lacus suscipit, ultrices erat id, consectetur urna. Nam rutrum ante sed ex auctor, a dictum velit auctor. Morbi eleifend nisl sit amet purus feugiat malesuada. Donec iaculis rutrum dolor, id cursus erat finibus id.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse aliquet scelerisque bibendum. Mauris sollicitudin dapibus metus, eget faucibus velit feugiat sed. Maecenas sodales diam nec est tincidunt iaculis. Nam accumsan consequat ultrices. Curabitur ut placerat neque, nec ultrices enim. Proin rutrum dui vel lectus bibendum ultricies. Suspendisse quis urna sit amet arcu vestibulum pharetra at a mauris. Nullam maximus pulvinar risus, eu auctor lectus tincidunt sit amet. Morbi ut faucibus quam. Phasellus sollicitudin pharetra ante, vel egestas est malesuada eu. Etiam interdum faucibus ligula, ac convallis ipsum eleifend eget. Vivamus id hendrerit dui. Cras feugiat eros at aliquam iaculis. Sed venenatis tellus a leo interdum vestibulum. Nullam bibendum nisl vitae mauris efficitur, vitae tempor ligula finibus.

This is a placeholder text often used in design and typesetting to demonstrate the visual effects of different fonts, layouts, and formatting. It does not have any specific meaning and is not meant to be read as coherent text.`}</p>
                    <button>{"yes delete"}</button>
                </div>
            </TransitionsModal>
        </section>
    );
};


export default Delete;