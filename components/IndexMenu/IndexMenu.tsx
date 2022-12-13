import { styled } from "../../stitches.config";
import TabBar from "./TabBar/TabBar";
import useBreakpoint from 'use-breakpoint';
import ButtonBar from "./ButtonBar/ButtonBar";

const Div = styled('div', {
    width:'100%',
});

const TopDiv = styled('div', {
    width:'100%',
    height:78,
    boxSizing:'border-box',

    display:'flex',
    justifyContent:'space-between',

    backgroundColor:'$grayLight', 
});

const BREAKPOINTS = { low: 1, high: 1001 }

export default function IndexMenu(){

    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'high');

    return(
        <Div>
            <TopDiv>
                <TabBar></TabBar>
                {breakpoint === 'high' && <ButtonBar></ButtonBar>}
            </TopDiv>
            
            {breakpoint === 'low' && <ButtonBar></ButtonBar>}
        </Div>
    );
}