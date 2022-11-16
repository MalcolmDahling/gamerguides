import { atom } from "recoil";

export const ShowHamburgerMenu = atom<boolean>({
    key:'ShowHamburgerMenu',
    default:false
});