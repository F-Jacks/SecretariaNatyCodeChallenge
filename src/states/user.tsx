import { atom } from "recoil";

export type TUser = null | {
    type: 'rider' | 'driver',
    id: number,
    nome: string
}

const userAtom = atom({
    key: 'userAtom',
    default: null as TUser
});


export default userAtom;