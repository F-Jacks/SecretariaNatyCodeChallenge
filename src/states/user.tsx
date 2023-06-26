import { TUser } from "@/types/user";
import { atom } from "recoil";

const userAtom = atom({
    key: 'userAtom',
    default: null as TUser
});


export default userAtom;