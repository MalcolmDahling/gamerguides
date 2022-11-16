import { ShowHamburgerMenu } from "../../atoms/ShowHamburgerMenu";
import { useRecoilValue } from 'recoil';
import { keyframes, styled } from "../../stitches.config";
import { useEffect, useState } from "react";

const open = keyframes({
    '0%':{width:0},
    '100%':{width:200}
});

const close = keyframes({
    '0%':{width:200},
    '100%':{width:0},
});

const Div = styled('div', {

    position:'fixed',
    top:60,
    bottom:0,
    right:0,

    backgroundColor:'$black',

    variants:{
        anim:{
            open:{
                animation:`${open} 250ms forwards`,
            },
            close:{
                animation:`${close} 250ms forwards`,
            }
        },

        hidden:{
            visible:{
                visibility:'visible'
            },
            hidden:{
                visibility:'hidden'
            }
        }
    }
});

const Nav = styled('nav', {

});

const Item = styled('a', {

});

export default function HamburgerMenu(){

    const showHamburgerMenu = useRecoilValue(ShowHamburgerMenu);
    const [showHamburgerMenuOnLoad, setShowHamburgerMenuOnLoad] = useState(false);

    //to hide the animation on load
    useEffect(() => {

        setTimeout(() => {
            setShowHamburgerMenuOnLoad(true);
        }, 260);
    }, []);

    return(
        <Div anim={showHamburgerMenu ? 'open' : 'close'} hidden={showHamburgerMenuOnLoad ? 'visible' : 'hidden'}>
            <Nav>

            </Nav>
        </Div>
    );
}