import { styled } from "../../stitches.config";

const Article = styled('article', {

    flexBasis:'31%'
});

const Img = styled('img', {

    width:'100%'
});

const H2 = styled('h2', {

    fontSize:16,
});

const P = styled('p', {

});

interface props{
    gameImage:string;
    gameReleased:string;
    gameSlug:string;
    gameTitle:string;
}

export default function Game(props:props){

    return(
        <Article>
            <Img src={props.gameImage}></Img>
            <H2>{props.gameTitle}</H2>
            <P>{props.gameReleased}</P>
        </Article>
    );
}