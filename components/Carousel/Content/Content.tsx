import { styled } from "../../../stitches.config";
import Links from "./Links";

const Div = styled('div', {
    position:'absolute',
    bottom:0,
    width:'100vw',
    maxWidth:1100,
    paddingBottom:15,
    paddingLeft:50,
    paddingRight:50,
    
    boxSizing:'border-box',

    '@bp3':{
        paddingLeft:15,
        paddingRight:30,
    }
});

const Logo = styled('img', {
    maxWidth:400,
    marginBottom:'3%',

    '@bp3':{
        // display:'none' doesnt work
        width:0,
        height:0,
    }
});

const Title = styled('h2', {
    fontSize:'1.7rem',
    color:'$white'
});

const Desc = styled('p', {
    color:'$white',

    '@bp3':{
        fontSize:'1.2rem',
    }
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