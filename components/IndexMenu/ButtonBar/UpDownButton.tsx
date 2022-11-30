import { styled } from "../../../stitches.config";

const Button = styled('button', {
    
    padding:5,

    borderRadius:5,
    backgroundColor:'transparent',
    border:'none',
    cursor:'pointer',

    '&:hover':{
        backgroundColor:'$red',
    },

    '&:hover img':{
        filter:'invert(98%) sepia(2%) saturate(76%) hue-rotate(153deg) brightness(115%) contrast(100%)',
    },

    variants:{
        active:{
            true:{
                backgroundColor:'$red'
            }
        }
    }
});

const Img = styled('img', {
    width:16,
    filter:'invert(52%) sepia(4%) saturate(15%) hue-rotate(348deg) brightness(89%) contrast(94%)',

    variants:{
        active:{
            true:{
                filter:'invert(98%) sepia(2%) saturate(76%) hue-rotate(153deg) brightness(115%) contrast(100%)'
            }
        }
    }
});

type props = {
    direction:'up' | 'down';
    isActive:boolean;
    onClick:() => void;
};

export default function UpDownButton(props:props){

    return(
        <Button active={props.isActive} onClick={props.onClick}>

            <Img active={props.isActive} src={`/images/index/button_bar/arrow_${props.direction}.png`}></Img>
        </Button>
    );
}