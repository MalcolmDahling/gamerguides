import { atom } from "recoil";
import { IGame } from "../models/IGame";

export const FetchedGames = atom<IGame[]>({
    key:'Games',
    default:[]
});