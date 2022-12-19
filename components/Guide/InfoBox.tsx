import { IGame } from "../../models/IGame";
import { styled } from "../../stitches.config";
import Game from "../Carousel/Game";
import Button from "./Button";
import OuterContainer from "./OuterContainer";

const ContainerRight = styled('div', {

    display:'flex',
    flexDirection:'column',
    gap:20
});

const Img = styled('img', {

    width:130,
    marginRight:20,
});

const ButtonContainer = styled('div', {

    display:'flex',
    gap:20
});

const Div = styled('div', {

});

const H1 = styled('h1', {

    margin:0,
    marginBottom:20,

    color:'$orange',
    fontSize:24
});

const P = styled('p', {

    margin:0,

    color:'$white',
    fontWeight:'bold'
})

const Info = styled('p', {

    margin:0,
    marginTop:5,
    color:'$grayLink'
});

const InfoSpan = styled('span', {

    color:'$white',
});

interface props{
    game?:IGame;
}

export default function InfoBox(props:props){

    return(
        <OuterContainer padding={20}>

            <Img src={props.game?.gameImage}></Img>

            <ContainerRight>
                <ButtonContainer>
                    <Button image="" text="Guide Info"></Button>
                    <Button image="" text="Download Guide"></Button>
                </ButtonContainer>

                <Div>
                    <H1>{props.game?.gameTitle}</H1>
                    <P>Guide and Walkthrough</P>
                    <Info>Published: <InfoSpan>{props.game?.gameReleased}</InfoSpan></Info>
                    <Info>Last Updated: <InfoSpan>x min ago.</InfoSpan></Info>
                    <Info>Version: 1.0</Info>
                </Div>
            </ContainerRight>

        </OuterContainer>
    );
}