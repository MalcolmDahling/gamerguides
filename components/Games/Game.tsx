import Link from "next/link";
import { useState } from "react";
import { keyframes, styled } from "../../stitches.config";

const ScaleUp = keyframes({
    '0%':{
        transform:'scale(1)'
    },
    '100%':{
        transform:'scale(1.1)'
    }
});

const ScaleDown = keyframes({
    '0%':{
        transform:'scale(1.1)'
    },
    '100%':{
        transform:'scale(1)'
    }
});

const Article = styled('article', {
    width:'100%',

    borderRadius:5,
    boxShadow:'1px 1px 4px lightgrey',
    backgroundColor:'$white',

    variants:{
        scaleUpAnim:{
            true:{
                animation:`${ScaleUp} 200ms forwards`
            }
        },
        scaleDownAnim:{
            true:{
                animation:`${ScaleDown} 200ms forwards`,
            }
        }
    }
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

    marginBottom:0,
    marginLeft:10,
    marginRight:10,

    fontSize:16,

    overflow:'hidden',
    display:'-webkit-box',
    lineClamp:2,
    '-webkit-line-clamp':2,
    boxOrient:'vertical',
    '-webkit-box-orient':'vertical'
});

const P = styled('p', {

    marginTop:5,
    marginLeft:10,

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

    const [scaleUpAnim, setScaleUpAnim] = useState(false);
    const [ScaleDownAnim, setScaleDownAnim] = useState(false);


    return(
        <Article
            onMouseEnter={() => {
                setScaleUpAnim(true);
                setScaleDownAnim(false);
            }}
                
            onMouseLeave={() => {
                setScaleUpAnim(false);
                setScaleDownAnim(true);
            }}
        
            scaleUpAnim={scaleUpAnim}
            scaleDownAnim={ScaleDownAnim}
        >


            <StyledLink href={`/${props.gameSlug}`}>
                <Img src={props.gameImage}></Img>
                <H2>{props.gameTitle}</H2>
            </StyledLink>
            <P>{props.gameReleased}</P>
        </Article>
    );
}