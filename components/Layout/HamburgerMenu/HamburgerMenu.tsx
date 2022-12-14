import { ShowHamburgerMenu } from "../../../atoms/ShowHamburgerMenu";
import { useRecoilValue } from 'recoil';
import { styled } from "../../../stitches.config";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Div = styled('div', {
    position:'fixed',
    top:60,
    bottom:0,
    right:0,
    zIndex:2,
    transition:'right 250ms',

    backgroundColor:'$black',

    variants:{
        toggle:{
            open:{
                right:0
            },
            close:{
                right:-200
            }
        }
    }
});

const Item = styled(Link, {
    display:'flex',
    alignItems:'center',

    padding:8,
    paddingLeft:21,
    paddingRight:20,

    fontWeight:'bold',
    textDecoration:'none',
    cursor:'pointer',
    borderLeft:'5px solid transparent',

    '&:hover':{
        borderLeft:'5px solid $red'
    },

    '&:hover .hoverWhite':{
        color:'$white'
    },

    variants:{
        hoverColor:{
            white:{

                '&:hover img':{
                    filter:'invert(100%) sepia(0%) saturate(7500%) hue-rotate(17deg) brightness(100%) contrast(101%)'
                }
            }
        }
    }
    
});

const Img = styled('img', {
    width:25,

    variants:{
        color:{
            gray:{
                filter:'invert(55%) sepia(4%) saturate(8%) hue-rotate(14deg) brightness(91%) contrast(83%)'
            },
            red:{
                filter:'invert(58%) sepia(92%) saturate(3506%) hue-rotate(317deg) brightness(96%) contrast(88%)'
            }
        }
    }
});

const Span = styled('span', {
    paddingLeft:10,
    
    

    variants:{
        color:{
            gray:{
                color:'$grayMenu'
            },
            premium:{
                color:'$orange'
            },
            red:{
                color:'$red'
            }
        }
    }
});

const DividingLine = styled('div', {
    height:1,
    width:'100%',
    marginTop:16,
    marginBottom:16,
    
    backgroundColor:'$grayMenu'
});


export default function HamburgerMenu(){

    const showHamburgerMenu = useRecoilValue(ShowHamburgerMenu);

    const router = useRouter();
    const path = router.asPath;

    return(
        <Div toggle={showHamburgerMenu ? 'open' : 'close'}>

            <nav>
                <Item hoverColor="white" href="/">
                    <Img color={path === '/' ? 'red' : 'gray'} src="/images/hamburgerMenu/home.png"></Img>
                    <Span color={path === '/' ? 'red' : 'gray'} className="hoverWhite">Home</Span>
                </Item>

                <Item hoverColor="white" href="/guides">
                    <Img color={path === '/guides' ? 'red' : 'gray'} src="/images/hamburgerMenu/guides.png"></Img>
                    <Span color={path === '/guides' ? 'red' : 'gray'} className="hoverWhite">Guides</Span>
                </Item>

                <Item hoverColor="white" href="/maps">
                    <Img color={path === '/maps' ? 'red' : 'gray'} src="/images/hamburgerMenu/maps.png"></Img>
                    <Span color={path === '/maps' ? 'red' : 'gray'} className="hoverWhite">Maps</Span>
                </Item>

                <Item hoverColor="white" href="/reviews">
                    <Img color={path === '/reviews' ? 'red' : 'gray'} src="/images/hamburgerMenu/reviews.png"></Img>
                    <Span color={path === '/reviews' ? 'red' : 'gray'} className="hoverWhite">Reviews</Span>
                </Item>

                <Item hoverColor="white" href="/videos">
                    <Img color={path === '/videos' ? 'red' : 'gray'} src="/images/hamburgerMenu/videos.png"></Img>
                    <Span color={path === '/videos' ? 'red' : 'gray'} className="hoverWhite">Videos</Span>
                </Item>

                <Item hoverColor="white" href="/member">
                    <Img color={path === '/members' ? 'red' : 'gray'} src="/images/hamburgerMenu/members.png"></Img>
                    <Span color={path === '/members' ? 'red' : 'gray'} className="hoverWhite">Members</Span>
                </Item>

                <DividingLine></DividingLine>

                <Item hoverColor="white" href="/pokedex">
                    <Img color={path === '/pokedex' ? 'red' : 'gray'} src="/images/hamburgerMenu/pokedex.svg"></Img>
                    <Span color={path === '/pokedex' ? 'red' : 'gray'} className="hoverWhite">Pok??dex</Span>
                </Item>

                <Item hoverColor="white" href="/elden-ring/database">
                    <Img color={path === '/elden-ring/database' ? 'red' : 'gray'} src="/images/hamburgerMenu/eldenring.svg"></Img>
                    <Span color={path === '/elden-ring/database' ? 'red' : 'gray'} className="hoverWhite">Elden Ring DB</Span>
                </Item>

                <DividingLine></DividingLine>

                <Item hoverColor="white" href="/signup">
                    <Img color={path === '/signup' ? 'red' : 'gray'} src="/images/hamburgerMenu/signup.png"></Img>
                    <Span color={path === '/signup' ? 'red' : 'gray'} className="hoverWhite">Sign Up</Span>
                </Item>

                <Item href="/premium">
                    <Img src="/images/hamburgerMenu/premium.png"></Img>
                    <Span color="premium">Go Premium</Span>
                </Item>

                <Item hoverColor="white" href="/logout">
                    <Img color="gray" src="/images/hamburgerMenu/login.png"></Img>
                    <Span color="gray" className="hoverWhite">Login</Span>
                </Item>
            </nav>

        </Div>
    );
}