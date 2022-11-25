import { atom } from "recoil";

export const ActiveGame = atom<number>({
    key:'ActiveGame',
    default:2
})