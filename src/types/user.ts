export type TUserType = 'rider' | 'driver';

export type TUser = null | {
    type: TUserType,
    id: number,
    nome: string
}