import { styled } from "../../stitches.config";

const StyledButton = styled('button', {

    width:150,
    height:40,

    backgroundColor:'$grayDark',
    color:'$white',
    borderRadius:5,
    cursor:'pointer',

    '&:hover':{
        backgroundColor:'$red'
    }
});

const Img = styled('img', {

});

interface props{
    image:string;
    text:string;
}

export default function Button(props:props){

    return(
        <StyledButton>
            <Img src={props.image}></Img>
            {props.text}
        </StyledButton>
    );
}