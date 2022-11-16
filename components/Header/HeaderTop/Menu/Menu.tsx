import { styled } from "../../../../stitches.config";
import Hamburger from "./Hamburger";
import Premium from "./Premium";
import Search from './Search';

const Div = styled('div', {
    height:60,
    paddingRight:'1rem',

    display:'flex',
    gap:10,
    justifyContent:'end',
    alignItems:'center',
});


export default function Menu(){


    return(
        <Div>
            <Search></Search>
            <Premium></Premium>
            <Hamburger></Hamburger>
        </Div>
    );
}