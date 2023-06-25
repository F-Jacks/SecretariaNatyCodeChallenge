import { atom } from "recoil";

type TUser = null | {
    type: 'rider' | 'driver',
    id: number,
    nome: string
}

const userAtom = atom({
    key: 'userAtom',
    default: null as TUser
});


export default userAtom;