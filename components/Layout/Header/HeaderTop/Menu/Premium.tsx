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

    variants:{
        variableWidth:{
            desktop:{
                width:113,
                paddingLeft:5,
                paddingRight:5
            },
            mobile:{
                width:28
            }
        }
    }
});

const PremiumIcon = styled('img', {
    width:15,
    height:15,
});

const Span = styled('span', {

    variants:{
        desktopMobile:{
            desktop:{
                display:'inline'
            },
            mobile:{
                display:'none'
            }
        }
    }
});

export default function Premium(){

    return(
        <Link href="/premium" passHref style={{textDecoration:'none'}}>
            <PremiumButton variableWidth={{'@premiumButtonDesktop': 'desktop', '@premiumButtonMobile': 'mobile'}}>
                    <PremiumIcon src="/images/headerTop/star.png"></PremiumIcon>
                    <Span desktopMobile={{'@premiumButtonDesktop': 'desktop', '@premiumButtonMobile': 'mobile'}}>Go Premium</Span>
            </PremiumButton>
        </Link>
    );
}