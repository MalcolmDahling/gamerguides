import Link from "next/link";
import { styled } from "../../stitches.config";

const Article = styled('article', {
    width:'100%',

    borderRadius:5,
    boxShadow:'1px 1px 4px lightgrey'

});

const StyledLink = styled(Link, {

    textDecoration:'none',
    color:'$black'
});

const Img = styled('img', {

    width:'100%',
    borderRadius:'5px 5px 0px 0px'
});

const H2 = styled('h2', {

    marginLeft:10,
    marginRight:10,

    fontSize:16,
});

const P = styled('p', {

    marginLeft:10,
    marginBottom:0,

    fontSize:'10pt',
    color:'gray'
});

interface props{
    gameImage:string;
    gameTitle:string;
    gameSlug:string;
    gameReleased:string;
}

export default function Game(props:props){

    return(
        <Article>
            <StyledLink href={`/${props.gameSlug}`}>
                <Img src={props.gameImage}></Img>
                <H2>{props.gameTitle}</H2>
            </StyledLink>
            <P>{props.gameReleased}</P>
        </Article>
    );
}