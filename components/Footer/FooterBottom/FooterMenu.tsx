import Link from "next/link";
import { styled } from "../../../stitches.config";

const Menu = styled('nav', {
    display:'flex',
    flexWrap:'wrap',
    gap:5,
    justifyContent:'center',
    alignItems:'center',

    color:'$white',
    fontSize:'1.2rem',
    fontWeight:700,
});

const StyledLink = styled(Link, {
    color:'$white',
    textDecoration:'none',

    '&:hover':{
        color:'$red'
    }
})

const Dot = styled('span', {
    fontSize:'0.7rem'
});

export default function FooterMenu(){
    
    return(
        <Menu>
            <StyledLink href="/">Home</StyledLink>
            <Dot>•</Dot>
            <StyledLink href="/about">About</StyledLink>
            <Dot>•</Dot>
            <StyledLink href="/contact">Contact</StyledLink>
            <Dot>•</Dot>
            <StyledLink href="/jobs">Jobs</StyledLink>
            <Dot>•</Dot>
            <StyledLink href="/staff">Staff</StyledLink>
            <Dot>•</Dot>
            <StyledLink href="/terms">Terms</StyledLink>
            <Dot>•</Dot>
            <StyledLink href="/privacy">Privacy</StyledLink>
        </Menu>
    );
}