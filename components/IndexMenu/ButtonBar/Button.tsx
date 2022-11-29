import { styled } from "../../../stitches.config";

const StyledButton = styled('button', {

    paddingLeft:15,
    paddingRight:15,
    height:40,

    backgroundColor:'$grayMid',
    color:'$white',
    border:'none',
    cursor:'pointer',
    fontFamily:'sans-serif',
    fontSize:16,
    fontWeight:600,
    borderRadius:10,

    '&:hover':{
        backgroundColor:'$red'
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
    marginRight:7,
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
        <StyledButton onClick={props.onClick} active={props.isActive}>
            <Img src={`/images/index/button_bar/${props.image}`}></Img>
            <Span>{props.text}</Span>
        </StyledButton>
    );
}