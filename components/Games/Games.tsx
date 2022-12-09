import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FetchedGames } from "../../atoms/FetchedGames";
import { IndexCurrentPage } from "../../atoms/IndexCurrentPage";
import { IndexMaxPages } from "../../atoms/IndexMaxPages";
import { IGame } from "../../models/IGame";
import { styled } from "../../stitches.config";
import PagesBar from "../PagesBar/PagesBar";
import Game from "./Game";

const Section = styled('section', {

    width:'100%',
    position:'relative',
    paddingBottom:50,

    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(137px, 1fr))',
    gap:20,

    variants:{
        marginRight:{
            true:{
                marginRight:60
            }
        },

        gamesGrid:{
            true:{
                gridTemplateColumns:'repeat(auto-fit, minmax(30%, 1fr))',
            }
        }
    }
});

interface props{
    marginRight:boolean;
}

export default function Games(props:props){

    const [fetchedGames, setFetchedGames] = useRecoilState(FetchedGames);
    const [indexMaxPages, setIndexMaxPages] = useRecoilState(IndexMaxPages);
    const indexCurrentPage = useRecoilValue(IndexCurrentPage);

    async function fetchGames(){

        let res = await axios.get<IGame[]>('/json/index_games.json');
        setFetchedGames(res.data);

        setIndexMaxPages(Math.ceil(res.data.length / 16));
    }

    useEffect(() => {

        fetchGames();
    }, []);

    return(
        <Section marginRight={props.marginRight} gamesGrid={{'@gamesGrid': true}}>

            {fetchedGames.map((game, i) => {

                if(indexCurrentPage === 1 && i === 0){
                    
                    return(
                        <Game 
                            key={game.gameTitle}
                            gameImage={game.gameImage}
                            gameReleased={game.gameReleased}
                            gameSlug={game.gameSlug}
                            gameTitle={game.gameTitle}
                        ></Game>
                    );
                }


                if(i > (indexCurrentPage-1)*16 && i < indexCurrentPage*16){

                    return(
                        <Game 
                            key={game.gameTitle}
                            gameImage={game.gameImage}
                            gameReleased={game.gameReleased}
                            gameSlug={game.gameSlug}
                            gameTitle={game.gameTitle}
                        ></Game>
                    );
                } 
            })}

            <PagesBar bottom={true}></PagesBar>
        </Section>
    );
}