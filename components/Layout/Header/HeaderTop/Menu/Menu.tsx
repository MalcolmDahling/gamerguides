import { styled } from "../../../../../stitches.config";
import Hamburger from "./Hamburger";
import Premium from "./Premium";
import Search from './Search';

const Div = styled('div', {
    height:60,

    display:'flex',
    gap:10,
    justifyContent:'end',
    alignItems:'center',


    paddingRight:'3rem',

    '@bp2':{
        paddingRight:'1.5rem'
    }
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