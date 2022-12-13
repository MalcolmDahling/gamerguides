import { styled } from "../../../stitches.config";

const StyledButton = styled('button', {

    padding:10,
    paddingLeft:15,
    paddingRight:15,

    backgroundColor:'$grayMid',
    color:'$white',
    border:'none',
    cursor:'pointer',
    fontFamily:'sans-serif',
    fontSize:16,
    fontWeight:600,
    borderRadius:10,

    '&:hover':{
        color:'$white',
        backgroundColor:'$red'
    },

    variants:{
        active:{
            true:{
                color:'$white !important',
                backgroundColor:'$red !important'
            }
        }
    },

    '@bp1':{
        padding:5,
        borderRadius:5,
        color:'#7A7A7A',
        backgroundColor:'transparent'
    }
});

const Img = styled('img', {
    width:16,
    marginRight:7,

    '@bp1':{
        display:'none'
    }
});

const Span = styled('span', {

});

type props = {
    text:string;
    image:string;
    isActive:boolean;
    onClick: () => void;
}

export default function Button(props:props){

    return(
        <StyledButton 
            onClick={props.onClick}
            active={props.isActive}
        >

            <Img src={`/images/index/button_bar/${props.image}`}></Img>
            <Span>{props.text}</Span>
        </StyledButton>
    );
}