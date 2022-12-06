import { styled } from "../../../stitches.config";

type props = {
    text:string;
    image:string;
    isActive:boolean;
    onClick:() => void;
}

const Button = styled('button', {
    position:'relative',
    width:132,
    height:78,

    color:'#777',
    backgroundColor:'$grayLight',
    border:'none',
    cursor:'pointer',
    fontFamily:'sans-serif',
    fontSize:16,
    fontWeight:600,

    '&:hover':{
        backgroundColor:'$white'
    },

    variants:{
        active:{
            true:{
                color:'$black',
                backgroundColor:'$white'
            },
        }
    }
});

const Img = styled('img', {
    width:25,
    position:'absolute',
    transform:'translate(-50%)',
    left:'50%',
    top:15,

    variants:{
        active:{
            false:{
                filter:'invert(52%) sepia(4%) saturate(15%) hue-rotate(348deg) brightness(89%) contrast(94%)'
            }
        }
    }
});

const Span = styled('span', {
    width:132,
    position:'absolute',
    left:0,
    bottom:15,
    textAlign:'center',
});

export default function Tab(props:props){

    return(
        <Button active={props.isActive} onClick={props.onClick}>
            <Img src={`/images/index/tab_bar/${props.image}`} active={props.isActive}></Img>
            <Span>{props.text}</Span>
        </Button>
    );
}