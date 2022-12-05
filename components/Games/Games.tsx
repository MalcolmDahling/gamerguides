import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "../../stitches.config";
import Game from "./Game";

const Div = styled('div', {

    marginRight:30,

    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between'
});

interface IGame{
    gameImage:string;
    gameLink:string;
    gamePublisher:string;
    gameReleased:string;
    gameSlug:string;
    gameTitle:string;
    guide:any;
}

export default function Games(){

    const [games, setGames] = useState<IGame[]>([]);

    async function fetchGames(){

        let res = await axios.get<IGame[]>('/json/guide_formatted.json');
        
        res.data.forEach(game => {

            setGames(prev => [...prev, game]);
        });
    }

    useEffect(() => {

        fetchGames();
    }, []);


    return(
        <Div>
            {games.map(game => {

                    return(
                        <Game 
                            gameImage={game.gameImage}
                            gameReleased={game.gameReleased}
                            gameSlug={game.gameSlug}
                            gameTitle={game.gameTitle}
                        ></Game>
                    );
                })
            }
        </Div>
    );
}