import { styled } from "../../stitches.config";
import Content from "./Content/Content";



const Div = styled('div', {
    width:1100,
    height:665,

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
        }
    },

    '@bp3':{
        height:500
    }
});


interface props{
    game:'gothamKnights' | 'cod' | 'pokemon' | 'grounded' | 'xenoblade';
    slug:string;
    logo:string;
    title:string;
    desc:string;
    review?:boolean;
}

export default function Game(props:props){


    return(
        <Div game={props.game}>
            
            <Content 
                review={props.review ? props.review : false}
                game={props.game}
                slug={props.slug}
                logo={props.logo}
                title={props.title}
                desc={props.desc}
            ></Content>
        </Div>
    );
}