import { useState } from "react";
import { styled } from "../../../stitches.config"
import Tab from "./Tab";

const Nav = styled('nav', {
    paddingLeft:10,
    paddingRight:10
});

export default function TabBar(){

    const [isActive, setIsActive] = useState(0);

    return(
        <Nav>
            <Tab text="Now Available" image="now_available.png" isActive={isActive === 0 ? true : false} onClick={() => {setIsActive(0)}}></Tab>
            <Tab text="Coming Soon" image="coming_soon.png" isActive={isActive === 1 ? true : false} onClick={() => {setIsActive(1)}}></Tab>
        </Nav>
    )
}