import { styled } from "@stitches/react";
import Link from "next/link";
import { IGame } from "../../models/IGame";
import OuterContainer from "./OuterContainer";

const CircleImage = styled('img', {

    width:40,
    height:40,
    marginRight:10,

    borderRadius:'50%'
});

const InnerContainer = styled('div', {

    display:'inline-flex',
    flexDirection:'column',
    gap:5
});

const A1 = styled(Link, {

    color:'$white',
    textDecoration:'none',
    fontWeight:'bold',

    '&:hover':{

        textDecoration:'underline'
    }
});

const Arrow = styled('span', {

    color:'$red'
});

const A2 = styled(Link, {

    color:'$grayLink',
    textDecoration:'none',

    '&:hover':{
        color:'$white'
    }
});

interface props{
    game?:IGame;
}

export default function TopBar(props:props){

    return(
        <OuterContainer padding={10}>
            <Link href={`/${props.game?.gameSlug}`}>
                <CircleImage src={props.game?.gameImage}></CircleImage>
            </Link>
            

            <InnerContainer>
                <A1 href={`/${props.game?.gameSlug}`}>{props.game?.gameTitle}</A1>

                <div>
                    <A2 href={`/${props.game?.gameSlug}/guide`}>Guide</A2>
                    <Arrow> » </Arrow>
                    <A2 href={`/${props.game?.gameSlug}/guide`}>Table of Contents</A2>
                </div>
            </InnerContainer>
        </OuterContainer>
    );
}