import { styled } from "../../../stitches.config";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";

const StyledFooter = styled('footer', {
    width:'100%',
    height:450,
    marginTop:150,
});

export default function Footer(){

    return(
        <StyledFooter>
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </StyledFooter>
    );
}