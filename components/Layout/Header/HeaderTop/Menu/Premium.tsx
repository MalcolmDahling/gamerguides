import Link from "next/link";
import { styled } from "../../../../../stitches.config";

const PremiumButton = styled('div', {
    height:28,
    
    cursor:'pointer',
    borderRadius:4,
    backgroundColor:'$grayDark',
    color:'$white',
    fontSize:14,
    fontWeight:'bold',

    display:'flex',
    justifyContent:'center',
    gap:5,
    alignItems:'center',

    '&:hover':{
        backgroundColor:'$red'
    },

    width:113,
    paddingLeft:5,
    paddingRight:5,

    '@bp3':{
        width:28,
        paddingLeft:0,
        paddingRight:0,
    }
});

const PremiumIcon = styled('img', {
    width:15,
    height:15,
});

const Span = styled('span', {

    display:'inline',

    '@bp3':{
        display:'none'
    }

});

export default function Premium(){

    return(
        <Link href="/premium" passHref style={{textDecoration:'none'}}>
            <PremiumButton>
                    <PremiumIcon src="/images/headerTop/star.png"></PremiumIcon>
                    <Span>Go Premium</Span>
            </PremiumButton>
        </Link>
    );
}