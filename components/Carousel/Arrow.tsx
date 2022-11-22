import { styled } from "../../stitches.config";

const StyledImg = styled('img', {
    position:'absolute',
    top:125,
    margin:0,
    zIndex:1,
    width:21,

    userSelect:'none',
    cursor:'pointer',
    filter:'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(248deg) brightness(103%) contrast(103%)',
    opacity:0.5,

    '&:hover':{
        opacity:1,
    },

    variants:{
        direction:{
            left:{
                left:14,
            },
            right:{
                right:14,
                transform:'rotate(180deg)'
            }
        }
    }
});

type props = {
    direction:any; //WHAT IS THE CORRECT TYPE? String doesnt work.
}

export default function Arrow(props:props){

    return(
        <StyledImg direction={props.direction} src="/images/index/arrow.png"></StyledImg>
    );
}