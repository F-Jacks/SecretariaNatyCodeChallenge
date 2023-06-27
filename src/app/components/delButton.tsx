import { deleteIcon } from "@/mocks/account";
import SvgIcon from "@mui/material/SvgIcon";
import { MouseEvent } from "react";


interface Props {
  onClick: (e?: MouseEvent<HTMLButtonElement>) => any;
}

const DelButton = (props: Props) => {
  return (
    <button
      className="bg-red-700 h-8 w-8 rounded-[8px]"
      onClick={props.onClick}
    >
      <SvgIcon component={deleteIcon} viewBox="0 0 24 24" />
    </button>
  );
};


export default DelButton;