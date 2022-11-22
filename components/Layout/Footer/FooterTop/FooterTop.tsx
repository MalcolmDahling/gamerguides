import { styled } from "../../../../stitches.config";

const TopDiv = styled('div', {
    height:40,
    position:'relative'
});

const Bar = styled('div', {
    width:'100%',
    height:40,
    backgroundColor:'rgba(0,0,0,0.5)'
});


const Triangle = styled('div', {
    position:'absolute',
    transform:'translate(-50%)',
    left:'50%',

    width:300,
    height:100,
    clipPath:'polygon(0% 100%,50% 0%,100% 100%)',
    
    variants:{
        top:{
            upper:{
                top:-100
            },
            lower:{
                top:-60
            }
        },

        backgroundColor:{
            lighter:{
                backgroundColor:'rgba(0,0,0,0.5)',
            },
            darker:{
                backgroundColor:'rgba(0,0,0,0.6)',
            }
        }
    }
});

const Logo = styled('img', {
    position:'absolute',
    transform:'translate(-50%)',
    left:'50%',
    top:'-25%',
    width:65,
    height:65,
});

export default function FooterTop(){

    return(
        <TopDiv>
            <Bar></Bar>
            <Triangle top="upper" backgroundColor="lighter"></Triangle>´
            <Triangle top="lower" backgroundColor="darker"></Triangle>
            <Logo src="/images/logo/logo.svg"></Logo>
        </TopDiv>
    );
}