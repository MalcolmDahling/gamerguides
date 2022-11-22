import { ShowHamburgerMenu } from "../../../../../atoms/ShowHamburgerMenu";
import { useRecoilState } from "recoil";
import { styled } from "../../../../../stitches.config";

const HamburgerButton = styled('div', {
    height:28,
    width:28,

    cursor:'pointer',
    borderRadius:4,
    backgroundColor:'$grayDark',

    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:2,

    '&:hover':{
        backgroundColor:'$red'
    }
});

const HamburgerTop = styled('div', {
    height:3,
    width:14,

    backgroundColor:'$white'
});

const HamburgerBottom = styled('div', {
    height:6,
    width:14,

    backgroundColor:'$white'
});

export default function Hamburger(){

    const [showHamburgerMenu, setShowHamburgerMenu] = useRecoilState(ShowHamburgerMenu);

    return(
        <HamburgerButton onClick={() => { setShowHamburgerMenu(!showHamburgerMenu); }}>
                <HamburgerTop></HamburgerTop>
                <HamburgerBottom></HamburgerBottom>
        </HamburgerButton>
    );
}