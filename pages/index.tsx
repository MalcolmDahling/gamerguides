import AdRight from "../components/AdRight/AdRight";
import Carousel from "../components/Carousel/Carousel";
import Games from "../components/Games/Games";
import PagesBar from "../components/PagesBar/PagesBar";
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

    variants:{
        padding:{
            true:{
                paddingLeft:10,
                paddingRight:10
            }
        }
    }
});

const BREAKPOINTS = { hide: 1, show: 900 }


export default function Index() {

    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'show');
    

    return (
        <>
            <Carousel></Carousel>
            <IndexMenu></IndexMenu>

            <FlexDiv padding={{'@indexMenuBottom' : true}}>
                <Games marginRight={breakpoint === 'show' ? true : false}></Games>

                {breakpoint === 'show' && 
                    <Section>
                        <AdRight></AdRight>
                    </Section>
                }
            </FlexDiv>

            <PagesBar paddingBottom={true}></PagesBar>
        </>
    );
}
