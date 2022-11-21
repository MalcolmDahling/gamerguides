import { styled } from "../../../stitches.config";
import FooterMenu from "./FooterMenu";
import Socials from "./Socials/Socials";

const BottomBackground = styled('div', {
    height:410,
    width:'100%',
    paddingTop:70,
    boxSizing:'border-box',

    backgroundColor:'rgba(0,0,0,0.8)'
});

const Copy = styled('p', {
    marginTop:40,
    textAlign:'center',
    fontSize:'larger',
    color:'#AFAFAF',
    lineHeight:'1.8rem'
});



export default function FooterBottom(){

    return(
        <BottomBackground>

            <FooterMenu></FooterMenu>

            <Copy>
                Gamer Guides is a registered trademark.
                <br/>
                © 2011 - 2022 Gamer Guides Ltd. All rights reserved.
            </Copy>

            <Socials></Socials>

        </BottomBackground>
    );
}