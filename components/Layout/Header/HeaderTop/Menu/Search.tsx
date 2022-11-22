import { useEffect, useState } from "react";
import { styled, keyframes } from "../../../../../stitches.config";

const open = keyframes({
    '0%':{width:'0%'},
    '100%':{width:'50%'}
});

const close = keyframes({
    '0%':{width:'50%'},
    '99%':{width:'0%', opacity:1},
    '100%':{opacity:0}
});

const SearchBar = styled('input', {
    position:'absolute',
    height:'50%',
    paddingLeft:10,

    backgroundColor:'$white',
    border:'none',
    borderRadius:4,

    transformOrigin:'right',
    
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
        },

        moveRight:{
            none:{
                right:217,
            },
            little:{
                right:193,
            },
            more:{
                right:98
            }
        }
    }
});

const SearchButton = styled('div', {
    height:28,
    width:28,
    zIndex:1,

    cursor:'pointer',
    borderRadius:4,
    backgroundColor:'$grayDark',

    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    '&:hover':{
        backgroundColor:'$red'
    },
});

const SearchIcon = styled('img', {
    width:15,
    height:15
});

export default function Search(){

    const [showSearchBar, setShowSearchBar] = useState(false);
    const [enableSearchBar, setEnableSearchBar] = useState(false);


    //hide the animation on load
    useEffect(() => {

        setTimeout(() => {
            setEnableSearchBar(true);
        }, 250);
    }, []);

    return(
        <>
            <SearchBar moveRight={{'@menuPaddingRightDesktop': 'none', '@menuPaddingRightMobile': 'little', '@premiumButtonMobile': 'more'}} anim={showSearchBar ? 'open' : 'close'} hidden={enableSearchBar ? 'visible' : 'hidden'} placeholder="Search Guides"></SearchBar>

            <SearchButton onClick={() => { setShowSearchBar(!showSearchBar) }}>
                    <SearchIcon src="/images/headerTop/search.png" />
            </SearchButton>
        </>
    );
}