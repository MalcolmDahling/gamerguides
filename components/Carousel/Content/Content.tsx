import { styled } from "../../../stitches.config";
import Links from "./Links";

const Div = styled('div', {
    width:'100%',
    position:'absolute',
    bottom:0,
    paddingBottom:15,
    paddingLeft:50,
    paddingRight:50,
    boxSizing:'border-box'
});

const Logo = styled('img', {
    maxWidth:'40%',
    marginBottom:'3%'
});

const Title = styled('h2', {
    fontSize:'1.7rem',
    color:'$white'
});

const Desc = styled('p', {
    color:'$white'
});

interface props{
    game:string;
    slug:string;
    logo:string;
    title:string;
    desc:string;
    review:boolean;
}

export default function Content(props:props){

    return(
        <Div>
            <Logo src={`/images/index/${props.game}/${props.logo}`}></Logo>
            <Title>{props.title}</Title>
            <Links slug={props.slug} review={props.review}></Links>
            <Desc>{props.desc}</Desc>
        </Div>
    );
}