import { useState } from "react";
import { styled } from "../../../stitches.config"
import Tab from "./Tab";

const Nav = styled('nav', {

    display:'flex',
    gap:10,
    
    paddingLeft:60,

    variants:{
        center:{
            true:{
                width:'100%',
                paddingLeft:0,

                
                justifyContent:'center'
            }
        }
    }
});

export default function TabBar(){

    const [isActive, setIsActive] = useState(0);

    return(
        <Nav center={{'@logoAndFooterMobile': true}}>
            <Tab text="Now Available" image="now_available.png" isActive={isActive === 0 ? true : false} onClick={() => {setIsActive(0)}}></Tab>
            <Tab text="Coming Soon" image="coming_soon.png" isActive={isActive === 1 ? true : false} onClick={() => {setIsActive(1)}}></Tab>
        </Nav>
    );
}