import { atom } from "recoil";

export const IndexCurrentTab = atom<string>({
    key:'IndexCurrentTag',
    default:'Now Available'
});