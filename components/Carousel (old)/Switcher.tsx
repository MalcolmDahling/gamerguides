import { useRecoilState } from "recoil";
import { ActiveGame } from "../../atoms/ActiveGame";
import { styled } from "../../stitches.config";

const Div = styled('div', {
    position:'absolute',
    transform:'translateX(-50%)',
    left:'50%',
    bottom:10,

    display:'flex',
    gap:7
});

const Button = styled('button', {
    width:30,
    height:3,
    border:'none',
    backgroundColor:'rgba(255,255,255,.5)',
    cursor:'pointer',

    '&:hover':{
        backgroundColor:'$white'
    },

    variants:{
        active:{
            true:{
                backgroundColor:'$white'
            }
        }
    }
});


type props = {
    buttonClick: (direction:string, count:number) => void;
}


export default function Switcher(props:props){

    const [activeGame, setActiveGame] = useRecoilState(ActiveGame);


    function handleClick(buttonNumber:number){

        if(buttonNumber < activeGame){

            let count = activeGame - buttonNumber;

            props.buttonClick('left', count);
        }

        else if (buttonNumber > activeGame){

            let count = buttonNumber - activeGame;

            props.buttonClick('right', count);
        }

        //setActiveGame(buttonNumber);
    }

    return(
        <Div>
            <Button active={activeGame === 0 ? true : false} onClick={() => {handleClick(0)}}></Button>
            <Button active={activeGame === 1 ? true : false} onClick={() => {handleClick(1)}}></Button>
            <Button active={activeGame === 2 ? true : false} onClick={() => {handleClick(2)}}></Button>
            <Button active={activeGame === 3 ? true : false} onClick={() => {handleClick(3)}}></Button>
            <Button active={activeGame === 4 ? true : false} onClick={() => {handleClick(4)}}></Button>
        </Div>
    );
}