import AdRight from "../components/AdRight/AdRight";
import Carousel from "../components/Carousel/Carousel";
import Games from "../components/Games/Games";
import IndexMenu from "../components/IndexMenu/IndexMenu";
import Section from "../components/Section/Section";
import { styled } from "../stitches.config";

const FlexDiv = styled('div', {
    display:'flex',
    justifyContent:'space-between',
    paddingLeft:50,
    paddingRight:50,
    paddingTop:10,
    paddingBottom:10
});

export default function Index() {

    return (
        <>
            <Carousel></Carousel>
            <IndexMenu></IndexMenu>

            <FlexDiv>
                <Section>
                    <Games></Games>
                </Section>

                <Section>
                    <AdRight></AdRight>
                </Section>
            </FlexDiv>
        </>
    );
}
