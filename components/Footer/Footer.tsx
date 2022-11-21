import { styled } from "../../stitches.config";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";

const StyledFooter = styled('footer', {
    position:'absolute',
    bottom:0,
    width:'100%',
    height:450
});

export default function Footer(){

    return(
        <StyledFooter>
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </StyledFooter>
    );
}