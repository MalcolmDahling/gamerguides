import { styled } from "../../../stitches.config";
import Links from "./Links";

const Div = styled('div', {
    width:'100%',
    position:'absolute',
    bottom:0,
    paddingBottom:15,
    paddingLeft:50,
    paddingRight:50,
    boxSizing:'border-box',

    variants:{
        padding:{
            less:{
                paddingLeft:15,
                paddingRight:15,
            }
        }
    }
});

const Logo = styled('img', {
    maxWidth:400,
    marginBottom:'3%',

    variants:{
        display:{
            hide:{
                display:'none',
            }
        }
    }
});

const Title = styled('h2', {
    fontSize:'1.7rem',
    color:'$white'
});

const Desc = styled('p', {
    color:'$white',

    variants:{
        fontSize:{
            bigger:{
                fontSize:'1.2rem',
            }
        }
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
        <Div padding={{'@carouselMobile': 'less'}}>
            <Logo src={`/images/index/${props.game}/${props.logo}`} display={{'@carouselMobile': 'hide'}}></Logo>
            <Title>{props.title}</Title>
            <Links slug={props.slug} review={props.review}></Links>
            <Desc fontSize={{'@carouselMobile': 'bigger'}}>{props.desc}</Desc>
        </Div>
    );
}