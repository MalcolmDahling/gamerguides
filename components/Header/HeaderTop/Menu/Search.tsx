import { useEffect, useState } from "react";
import { styled, keyframes } from "../../../../stitches.config";

const SearchContainer = styled('div', {
    width:'50%',
    height:32,
    paddingRight:2,
    position:'relative',

    display:'flex',
    justifyContent:'end',
    alignItems:'center'
});

const open = keyframes({
    '0%':{width:'0%'},
    '100%':{width:'100%'}
});

const close = keyframes({
    '0%':{width:'100%'},
    '99%':{width:'0%', opacity:1},
    '100%':{opacity:0}
});

const SearchBar = styled('input', {
    position:'absolute',
    right:-2,
    height:'100%',
    paddingLeft:10,
    zIndex:-1,

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
        }
    }
});

const SearchButton = styled('div', {
    height:28,
    width:28,

    cursor:'pointer',
    borderRadius:4,
    backgroundColor:'$darkGray',

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


    //to hide the animation on load
    useEffect(() => {

        setTimeout(() => {
            setEnableSearchBar(true);
        }, 260);
    }, []);

    return(
        <SearchContainer>
            <SearchBar anim={showSearchBar ? 'open' : 'close'} hidden={enableSearchBar ? 'visible' : 'hidden'} placeholder="Search Guides"></SearchBar>

            <SearchButton onClick={() => { setShowSearchBar(!showSearchBar) }}>
                    <SearchIcon src="/images/headerTop/search.png" />
            </SearchButton>
        
        </SearchContainer>
    );
}