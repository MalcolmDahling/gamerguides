import { atom } from "recoil";
import { IGame } from "../models/IGame";

export const FetchedGamesComingSoon = atom<IGame[]>({
    key:'GamesComingSoon',
    default:[]
});