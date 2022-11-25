import { keyframes, styled } from "../../stitches.config";
import Content from "./Content/Content";

const slideLeft = keyframes({
    '0%':{
        transform:'translate(0px)'
    },
    '100%':{
        transform:'translate(1100px)'
    }
});

const slideRight = keyframes({
    '0%':{
        transform:'translate(0px)'
    },
    '100%':{
        transform:'translate(-1100px)'
    }
});

const Div = styled('div', {
    position:'absolute',
    width:1100,
    height:'100%',

    variants:{
        game:{
            gothamKnights:{
                backgroundImage:'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%), url(/images/index/gothamKnights/gotham_knights.webp)',
            },
            cod:{
                backgroundImage:'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%), url(/images/index/cod/cod.webp)',
            },
            pokemon:{
                backgroundImage:'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%), url(/images/index/pokemon/pokemon.webp)',
            },
            grounded:{
                backgroundImage:'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%), url(/images/index/grounded/grounded.webp)',
            },
            xenoblade:{
                backgroundImage:'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%), url(/images/index/xenoblade/xenoblade.webp)',
            }
        },

        animations:{
            slideLeft:{
                animation:`${slideLeft} 400ms forwards`
            },

            slideRight:{
                animation:`${slideRight} 400ms forwards`
            },

            none:{

            }
        }
    },
});

interface props{
    game:any; //WHAT IS THE CORRECT TYPE? String doesnt work.
    slug:string;
    logo:string;
    title:string;
    desc:string;
    review?:boolean;
    position:number;
    animDirection:string;
}

export default function Game(props:props){

    return(
        <Div game={props.game} animations={props.animDirection === 'left' ? 'slideLeft' : props.animDirection === 'right' ? 'slideRight' : 'none'} style={{translate:props.position}}>
            <Content review={props.review ? props.review : false} game={props.game} slug={props.slug} logo={props.logo} title={props.title} desc={props.desc}></Content>
        </Div>
    );
}