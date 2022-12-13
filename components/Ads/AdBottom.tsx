import useBreakpoint from "use-breakpoint";
import { styled } from "../../stitches.config";
import Subscribe from "./Subscribe";

const Div = styled('div', {

    maxWidth:1000,
    margin:'auto',
    height:300,
    marginTop:20,
    position:'relative',

    borderRadius:10,
    backgroundColor:'rgba(0,0,0,0.8)',

    '@bp1':{
        maxWidth:330
    }
});

const BREAKPOINTS = {low:1, high:1001};

export default function AdBottom(){

    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'high');

    return(
        <Div>
            <Subscribe width={breakpoint === 'high' ? 'large' : 'small'}></Subscribe>
        </Div>
    );
}