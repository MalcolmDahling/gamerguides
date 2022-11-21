import { styled } from "../../../../stitches.config";
import IconLink from "./IconLink";

const Nav = styled('nav', {
    width:'fit-content',
    margin:'auto',
    marginTop:35,

    display:'flex',
    

    variants:{
        flexGap:{
            desktop:{
                gap:20
            },
            mobile:{
                gap:10
            }
        }
    }
});

export default function Socials(){

    return(
        <Nav  flexGap={{'@logoAndFooterDesktop': 'desktop', '@logoAndFooterMobile': 'mobile'}}>
            <IconLink url="https://play.google.com/store/books/author?id=GamerGuides.com" img="/images/socials/google_play.png"></IconLink>
            <IconLink url="https://itunes.apple.com/us/author/gamerguides-com/id482893078?mt=11" img="/images/socials/apple.png"></IconLink>
            <IconLink url="https://www.youtube.com/c/GamerGuidesOfficial" img="/images/socials/youtube.png"></IconLink>
            <IconLink url="https://discordapp.com/invite/6zn9thr" img="https://www.gamerguides.com/assets/front/images/ext-logos/Discord-Logo-White.svg"></IconLink>
            <IconLink url="https://twitch.tv/gamerguides" img="https://www.gamerguides.com/assets/front/images/ext-logos/TwitchGlitchWhite.svg"></IconLink>
        </Nav>
    );
}