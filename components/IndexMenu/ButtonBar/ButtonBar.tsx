import { useState } from "react";
import { styled } from "../../../stitches.config";
import Button from "./Button";
import PagesBar from "../../PagesBar/PagesBar";
import UpDownButton from "./UpDownButton";
import { useRecoilState } from "recoil";
import { FetchedGames } from "../../../atoms/FetchedGames";

const Div = styled('div', {

    height:'100%',
    marginRight:50,
    
    display:'flex',
    flexWrap:'wrap',
    gap:20,
    alignItems:'center',
    justifyContent:'center',

    '@bp1':{
        width:'100%',
        marginTop:10,

        justifyContent:'center',
        gap:5
    }
});

const UpDownButtonsContainer = styled('div', {

    display:'flex',
    gap:5
});

export default function ButtonBar(){

    const [isActiveButtons, setIsActiveButtons] = useState(0);
    const [isActiveUpDown, setIsActiveUpDown] = useState(1);
    const [fetchedGames, setFetchedGames] = useRecoilState(FetchedGames);

    function sortByRelease(){

        
    }

    function sortAlphabetically(){

        setFetchedGames([...fetchedGames].sort((a, b) => a.gameTitle.localeCompare(b.gameTitle)));
    }

    function sortReverse(buttonNumber:number){

        if((buttonNumber === 0 && isActiveUpDown === 1) || (buttonNumber === 1 && isActiveUpDown === 0)){

            setFetchedGames([...fetchedGames].reverse());
        }
    }
    
    return(
        
        <Div>

            <Button
                text="Release"
                image="release.png"
                isActive={isActiveButtons === 0 ? true : false}
                onClick={() => {
                    setIsActiveButtons(0);
                    sortByRelease();
                }}
            ></Button>

            <Button
                text="Title"
                image="title.png"
                isActive={isActiveButtons === 1 ? true : false}
                onClick={() => {
                    setIsActiveButtons(1);
                    sortAlphabetically();
                }}
            ></Button>

            <Button
                text="Publisher"
                image="publisher.png"
                isActive={isActiveButtons === 2 ? true : false}
                onClick={() => {setIsActiveButtons(2)}}
            ></Button>

            <UpDownButtonsContainer>
                <UpDownButton
                    direction="up"
                    isActive={isActiveUpDown === 0 ? true : false}
                    onClick={() => {
                        setIsActiveUpDown(0);
                        sortReverse(0);
                    }}
                ></UpDownButton>

                <UpDownButton
                    direction="down"
                    isActive={isActiveUpDown === 1 ? true : false}
                    onClick={() => {
                        setIsActiveUpDown(1);
                        sortReverse(1);
                    }}
                ></UpDownButton>
            </UpDownButtonsContainer>

            <PagesBar flexBasis={true}></PagesBar>

        </Div>  
    );
}