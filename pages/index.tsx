import AdSmall from "../components/Ads/AdSmall";
import Carousel from "../components/Carousel/Carousel";
import Games from "../components/Games/Games";
import IndexMenu from "../components/IndexMenu/IndexMenu";
import Section from "../components/Section/Section";
import { styled } from "../stitches.config";
import useBreakpoint from "use-breakpoint";

const FlexDiv = styled('div', {
    display:'flex',
    justifyContent:'space-between',
    paddingLeft:50,
    paddingRight:50,
    paddingTop:10,
    paddingBottom:10,

    '@bp1':{
        paddingLeft:10,
        paddingRight:10
    }
});

const BREAKPOINTS = { low: 1, high: 900 }


export default function Index() {

    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'high');
    

    return (
        <>
            <Carousel></Carousel>
            <IndexMenu></IndexMenu>

            <FlexDiv>
                <Games marginRight={breakpoint === 'high' ? true : false}></Games>

                {breakpoint === 'high' && 
                    <Section>
                        <AdSmall></AdSmall>
                    </Section>
                }
            </FlexDiv>
        </>
    );
}
