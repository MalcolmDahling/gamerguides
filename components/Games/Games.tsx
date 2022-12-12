import axios from "axios";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FetchedGames } from "../../atoms/FetchedGames";
import { FetchedGamesComingSoon } from "../../atoms/FetchedGamesComingSoon";
import { IndexCurrentPage } from "../../atoms/IndexCurrentPage";
import { IndexCurrentTab } from "../../atoms/IndexCurrentTab";
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
    gridTemplateColumns:'repeat(4, 1fr)',
    gap:20,
    '@indexGamesGrid_2_columns':{gridTemplateColumns:'repeat(2, 1fr)'},

    variants:{
        marginRight:{
            true:{
                marginRight:60
            }
        },

        grid:{
            columns_3_adRight:{
                gridTemplateColumns:'repeat(3, 1fr)',
            },
            
            columns_5:{
                gridTemplateColumns:'repeat(5, 1fr)',
            },

            columns_4:{
                gridTemplateColumns:'repeat(4, 1fr)',
            },

            columns_3:{
                gridTemplateColumns:'repeat(auto-fit, calc(33.33% - 20px))',
            },

            columns_2:{
                gridTemplateColumns:'repeat(auto-fit, calc(50% - 20px))',
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

    const [fetchedGamesComingSoon, setFetchedGamesComingSoon] = useRecoilState(FetchedGamesComingSoon)
    
    const indexCurrentPage = useRecoilValue(IndexCurrentPage);
    const indexCurrentTab = useRecoilValue(IndexCurrentTab);


    async function fetchGames(){

        let res = await axios.get<IGame[]>('/json/index_games.json');

        setFetchedGames(res.data);
        setIndexMaxPages(Math.ceil(res.data.length / 16));
    }

    async function fetchGamesComingSoon(){

        let res = await axios.get<IGame[]>('/json/index_games_coming_soon.json');

        setFetchedGamesComingSoon(res.data);
    }

    useEffect(() => {

        fetchGames();
        fetchGamesComingSoon();
    }, []);


    return(
        <Section
            marginRight={props.marginRight}
            grid={{
                '@indexGamesGrid_3_columns_adRight' : 'columns_3_adRight',
                '@indexGamesGrid_5_columns' : 'columns_5',
                '@indexGamesGrid_4_columns' : 'columns_4',
                '@indexGamesGrid_3_columns' : 'columns_3',
                '@indexGamesGrid_2_columns' : 'columns_2',
            }}
        >

            {indexCurrentTab === 'Now Available' && fetchedGames.map((game, i) => {


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

                if(i > (indexCurrentPage-1)*16 && i < indexCurrentPage*16){ //change to a pagination lib

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


            {indexCurrentTab === 'Coming Soon' && fetchedGamesComingSoon.map(game => {

                return(
                    <Game
                        key={game.gameTitle}
                        gameImage={game.gameImage}
                        gameReleased={game.gameReleased}
                        gameSlug={game.gameSlug}
                        gameTitle={game.gameTitle}
                    ></Game>
                );
            })}

            <PagesBar bottom={true}></PagesBar>
        </Section>
    );
}