import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ActiveGame } from "../../atoms/ActiveGame";
import { styled } from "../../stitches.config";
import Arrow from "./Arrow";
import Game from "./Game";
import Switcher from "./Switcher";

const Container = styled('div', {
    position:'relative',
    width:'100%',
    
    height:665,

    overflow:'hidden',
    borderRadius:'10px 10px 0px 0px',

    variants:{
        height:{
            mobile:{
                height:500
            }
        }
    }
});




export default function Carousel(){

    const [positions, setPositions] = useState([-2200, -1100, 0, 1100, 2200]);
    const [activeGame, setActiveGame] = useRecoilState(ActiveGame);
    const [previousGame, setPreviousGame] = useState(2);
    const [animDirection, setAnimDirection] = useState('');


    useEffect(() => {

        if(activeGame < previousGame){ //if should move left
            moveLeft();
        }

        else if(previousGame < activeGame){ //if should move right
            moveRight();
        }

        setPreviousGame(activeGame);
        
    }, [activeGame]);


    function moveLeft(fromArrow?:boolean){

        if(animDirection === ''){

            setAnimDirection('left');

            if(fromArrow){ //if not changed from buttons

                if(activeGame === 0){ //if rollover
                    setActiveGame(4);
                }
                else{
                    setActiveGame(activeGame-1);
                }
            }

            setTimeout(() => {

                if(fromArrow){

                    setPositions([
                        positions[0] === 2200 ? -2200 : positions[0] + 1100,
                        positions[1] === 2200 ? -2200 : positions[1] + 1100,
                        positions[2] === 2200 ? -2200 : positions[2] + 1100,
                        positions[3] === 2200 ? -2200 : positions[3] + 1100,
                        positions[4] === 2200 ? -2200 : positions[4] + 1100,
                    ]);
                }

                else{

                    if(activeGame === 0){
                        setPositions([0, 1100, 2200, -2200, -1100]);
                    }
                    if(activeGame === 1){
                        setPositions([-1100, 0, 1100, 2200, -2200]);
                    }
                    if(activeGame === 2){
                        setPositions([-2200, -1100, 0, 1100, 2200]);
                    }
                    if(activeGame === 3){
                        setPositions([2200, -2200, -1100, 0, 1100]);
                    }
                    if(activeGame === 4){
                        setPositions([1100, 2200, -2200, -1100, 0]);
                    }
                }

                setAnimDirection('');
            }, 400);
        }
    }


    function moveRight(fromArrow?:boolean){

        console.log(positions);

        if(animDirection === ''){

            setAnimDirection('right');

            if(fromArrow){ //if not changed from buttons

                if(activeGame === 4){ //if rollover
                    setActiveGame(0);
                }
                else{
                    setActiveGame(activeGame+1);
                }
            }

            setTimeout(() => {

                if(fromArrow){

                    setPositions([
                        positions[0] === -2200 ? 2200 : positions[0] - 1100,
                        positions[1] === -2200 ? 2200 : positions[1] - 1100,
                        positions[2] === -2200 ? 2200 : positions[2] - 1100,
                        positions[3] === -2200 ? 2200 : positions[3] - 1100,
                        positions[4] === -2200 ? 2200 : positions[4] - 1100,
                    ]);
                }

                else{

                    if(activeGame === 0){
                        setPositions([0, 1100, 2200, -2200, -1100]);
                    }
                    if(activeGame === 1){
                        setPositions([-1100, 0, 1100, 2200, -2200]);
                    }
                    if(activeGame === 2){
                        setPositions([-2200, -1100, 0, 1100, 2200]);
                    }
                    if(activeGame === 3){
                        setPositions([2200, -2200, -1100, 0, 1100]);
                    }
                    if(activeGame === 4){
                        setPositions([1100, 2200, -2200, -1100, 0]);
                    }
                }

                setAnimDirection('');
            }, 400);
        }
    }


    return(
        <Container height={{'@carouselHeightMobile': 'mobile'}}>

            <div onClick={() => {moveLeft(true)}}>
                <Arrow direction="left"></Arrow>
            </div>

            <div onClick={() => {moveRight(true)}}>
                <Arrow direction="right"></Arrow>
            </div>

            <Game
                game="cod"
                slug="call-of-duty-modern-warfare-ii"
                logo="cod_logo.webp"
                title="Call of Duty: Modern Warfare II"
                desc="Call of Duty: Modern Warfare II is a first-person shooter developed by Infinity Ward & published by Activision. It is a direct sequel to the 2019 reboot and serves as the 19th installment in the overall Call of Duty series."
                position={positions[0]}
                animDirection={animDirection}
            ></Game>

            <Game
                game="pokemon"
                slug="pokemon-scarlet-and-violet"
                logo="pokemon_logo.png"
                title="Pokémon Scarlet & Violet"
                desc="Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. They are part of the 9th generation of Pokemon games."
                position={positions[1]}
                animDirection={animDirection}
            ></Game>

            <Game
                game="grounded"
                slug="grounded"
                logo="grounded_logo.png"
                title="Grounded"
                desc="Grounded is a survival video game developed by Obsidian Entertainment and published by Xbox Game Studios. It was released for PC and Xbox One on September 27, 2022."
                position={positions[2]}
                animDirection={animDirection}
            ></Game>

            <Game
                game="xenoblade"
                slug="xenoblade-chronicles-3"
                logo="xenoblade_logo.png"
                title="Xenoblade Chronicles 3"
                desc="Xenoblade Chronicles 3 is a 2022 action RPG developed by Monolith Soft & published by Nintendo for the Nintendo Switch."
                position={positions[3]}
                animDirection={animDirection}
            ></Game>

            <Game
                game="gothamKnights"
                slug="gotham-knights"
                logo="gotham_knights_logo.png"
                title="Gotham Knights"
                desc="Gotham Knights is an action RPG developed by WB Games Montréal published by Warner Bros. The game focuses on the characters Nightwing, Batgirl, Robin Red Hood as they attempt to restore justice to Gotham during a period of decline in the wake of Batman’s death."
                review={true}
                position={positions[4]}
                animDirection={animDirection}
            ></Game>

            <Switcher></Switcher>
        </Container>
    );
}