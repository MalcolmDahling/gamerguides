import { useState } from "react";
import { useRecoilState } from "recoil";
import { IndexCurrentPage } from "../../../atoms/IndexCurrentPage";
import { IndexCurrentTab } from "../../../atoms/IndexCurrentTab";
import { styled } from "../../../stitches.config"
import Tab from "./Tab";

const Nav = styled('nav', {

    display:'flex',
    gap:10,
    
    paddingLeft:50,

    '@bp3':{
        width:'100%',
        paddingLeft:0,
  
        justifyContent:'center'
    }
});

export default function TabBar(){

    const [indexCurrentTab, setIndexCurrentTab] = useRecoilState(IndexCurrentTab);
    const [indexCurrentPage, setIndexCurrentPage] = useRecoilState(IndexCurrentPage);

    return(
        <Nav>

            <Tab 
                text="Now Available"
                image="now_available.png"
                isActive={indexCurrentTab === 'Now Available' ? true : false}
                onClick={() => {
                    setIndexCurrentTab('Now Available');
                    setIndexCurrentPage(1);
                }}
            ></Tab>
            
            <Tab 
                text="Coming Soon"
                image="coming_soon.png"
                isActive={indexCurrentTab === 'Coming Soon' ? true : false}
                onClick={() => {
                    setIndexCurrentTab('Coming Soon');
                    setIndexCurrentPage(1);
                }}
            ></Tab>
        
        </Nav>
    );
}