import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "../../stitches.config";
import Game from "./Game";

const Div = styled('div', {

    marginRight:30,

    display:'flex',
    flexWrap:'wrap',
    gap:20
});

interface IGame{
    gameImage:string;
    gameTitle:string;
    gameSlug:string;
    gameReleased:string;
}

export default function Games(){

    const [games, setGames] = useState<IGame[]>([]);

    async function fetchGames(){

        let res = await axios.get<IGame[]>('/json/index_games.json');
        setGames(res.data);
    }

    useEffect(() => {

        fetchGames();
    }, []);


    return(
        <Div>
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
        </Div>
    );
}