import Link from "next/link";
import { styled } from "../../../stitches.config";

const Div = styled('div', {
    marginTop:35,
    marginBottom:55,

    display:'flex',
    justifyContent:'start',
    gap:15,

    variants:{
        flexSpaceBetween:{
            true:{
                justifyContent:'space-between',
                flexWrap:'wrap',
                gap:5
            }
        }
    },
});

const StyledLink = styled(Link, {
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:20,
    paddingRight:20,

    color:'$white',
    backgroundColor:'rgba(0,0,0,0.35)',
    borderRadius:5,
    textDecoration:'none',
    fontSize:'1.2rem',
    fontWeight:'bold',

    '&:hover':{
        color:'$black',
        backgroundColor:'$white'
    },

    '&:hover img':{
        filter:'none'
    },

    display:'flex',
    justifyContent:'center',
    gap:10,

    variants:{
        flexGrow:{
            true:{
                paddingLeft:5,
                paddingRight:5,
                flexGrow:1,
            }
        }
    }
});

const Img = styled('img', {
    width:20,
    filter:'brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(2%) hue-rotate(183deg) brightness(111%) contrast(100%)'
});

const Span = styled('span', {

});

interface props{
    slug:string;
    review:boolean;
}

export default function Links(props:props){

    return(
        <Div flexSpaceBetween={{'@carouselMobile': true}}>
            {props.review &&
                <StyledLink href={`/${props.slug}/review`} flexGrow={{'@carouselMobile': true}}>
                    <Img src="/images/index/carousel/review.png"></Img>
                    <Span>Review</Span>
                </StyledLink>
            }

            <StyledLink href={`/${props.slug}/guide`} flexGrow={{'@carouselMobile': true}}>
                <Img src="/images/index/carousel/guide.png"></Img>
                <Span>Guide</Span>
            </StyledLink>

            <StyledLink href={`/${props.slug}`} flexGrow={{'@carouselMobile': true}}>
                <Img src="/images/index/carousel/about.png"></Img>
                <Span>About</Span>
            </StyledLink>
        </Div>
    );
}