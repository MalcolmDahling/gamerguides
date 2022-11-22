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

    variants:{
        paddingRight:{
            desktop:{
                paddingRight:'3rem',
            },
            mobile:{
                paddingRight:'1.5rem',
            }
        }
    }
});


export default function Menu(){


    return(
        <Div paddingRight={{'@menuPaddingRightDesktop': 'desktop', '@menuPaddingRightMobile': 'mobile' }}>
            <Search></Search>
            <Premium></Premium>
            <Hamburger></Hamburger>
        </Div>
    );
}