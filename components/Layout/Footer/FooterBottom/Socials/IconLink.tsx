import Link from "next/link";
import { styled } from "../../../../../stitches.config";

const StyledLink = styled(Link, {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    width:50,
    height:50,
    borderRadius:100,
    backgroundColor:'$grayMid',

    '&:hover':{
        backgroundColor:'$red'
    }
});

const Img = styled('img', {
    width:25,
    height:25,
});

interface props{
    url:string;
    img:string;
}

export default function IconLink(props:props){

    return(
        <StyledLink href={props.url}>
            <Img src={props.img}></Img>
        </StyledLink>
    );
}