import Link from "next/link";
import { styled } from "../../stitches.config";

const Div = styled('div', {

    position:'absolute',
    transform:'translate(-50%)',
    left:'50%',

    backgroundColor:'$black',
    borderRadius:'0px 0px 5px 5px',
    textAlign:'center',
    lineHeight:0.8,

    display:'flex',
    justifyContent:'center',

    '&:hover':{
        textDecoration:'underline'
    },

    variants:{
        width:{
            small:{
                width:165,
                height:38,
                bottom:-38,
            },
            large:{
                width:208,
                height:25,
                bottom:-25,
            }
        }
    }
    
});

const StyledLink = styled(Link, {

    paddingTop:6,
    margin:0,

    color:'$orange',
    fontSize:'8pt',
    textDecoration:'none',
});

const Img = styled('img', {

    width:11,
    marginRight:1,
});

interface props{
    width:'small' | 'large';
}

export default function Subscribe(props:props){

    return(
        <Div width={props.width}>
            <StyledLink href="/premium">
                <Img src="/images/ads/star.png"></Img>
                Subscribe to Premium to Remove Ads
            </StyledLink>
        </Div>
    );
}