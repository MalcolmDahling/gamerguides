import { styled } from "../../stitches.config";
import TabBar from "./TabBar/TabBar";
import useBreakpoint from 'use-breakpoint';
import { useEffect } from "react";
import ButtonBar from "./ButtonBar/ButtonBar";

const Div = styled('div', {
    width:'100%',
});

const TopDiv = styled('div', {
    width:'100%',
    height:78,
    paddingLeft:50,
    paddingRight:50,
    boxSizing:'border-box',

    display:'flex',
    justifyContent:'space-between',

    backgroundColor:'$grayLight', 
});

const BREAKPOINTS = { under: 1, over: 1030 }

export default function IndexMenu(){

    
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'over');

    useEffect(() => {
        console.log(breakpoint);
        
    },[breakpoint])

    return(
        <Div>
            <TopDiv>
                <TabBar></TabBar>
                {breakpoint === 'over' && <ButtonBar></ButtonBar>}
            </TopDiv>
            
            {breakpoint === 'under' && <ButtonBar></ButtonBar>}
        </Div>
    );
}