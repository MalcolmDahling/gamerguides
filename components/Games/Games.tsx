import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IndexMaxPages } from "../../atoms/IndexMaxPages";
import { styled } from "../../stitches.config";
import Game from "./Game";

const Section = styled('section', {

    width:'100%',

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

interface IGame{
    gameImage:string;
    gameTitle:string;
    gameSlug:string;
    gameReleased:string;
}

interface props{
    marginRight:boolean;
}

export default function Games(props:props){

    const [games, setGames] = useState<IGame[]>([]);
    const [indexMaxPages, setIndexMaxPages] = useRecoilState(IndexMaxPages);

    async function fetchGames(){

        let res = await axios.get<IGame[]>('/json/index_games.json');
        setGames(res.data);

        setIndexMaxPages(Math.ceil(res.data.length / 16));
    }

    useEffect(() => {

        fetchGames();
    }, []);


    return(
        <Section marginRight={props.marginRight} gamesGrid={{'@gamesGrid': true}}>
            {games.map(game => {

                    return(
                        <Game 
                            key={game.gameTitle}
                            gameImage={game.gameImage}
                            gameReleased={game.gameReleased}
                            gameSlug={game.gameSlug}
                            gameTitle={game.gameTitle}
                        ></Game>
                    );
                })
            }
        </Section>
    );
}