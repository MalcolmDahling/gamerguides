import search from '../../../public/images/search.png'
import { styled } from "../../../stitches.config";

export default function Menu(){

    const Menu = styled('div', {
        flexBasis:'10%',

        height:60,
        paddingRight:'1rem',
        paddingLeft:'1rem',

        display:'flex',
        gap:10,
        justifyContent:'end',
        alignItems:'center',
    });

    const Search = styled('div', {
        height:28,
        width:28,

        cursor:'pointer',
        borderRadius:4,
        backgroundColor:'$darkGray',

        '&:hover':{
            backgroundColor:'$red'
        }
    });

    const Premium = styled('div', {
        height:28,
        width:113,

        cursor:'pointer',
        borderRadius:4,
        backgroundColor:'$darkGray',
        color:'$white',
        fontSize:14,
        fontWeight:'bold',

        display:'flex',
        alignItems:'center',

        '&:hover':{
            backgroundColor:'$red'
        }
    });




    //Hamburger Icon
    const Hamburger = styled('div', {
        height:28,
        width:28,

        cursor:'pointer',
        borderRadius:4,
        backgroundColor:'$darkGray',

        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:2,

        '&:hover':{
            backgroundColor:'$red'
        }
    });

    const HamburgerTop = styled('div', {
        height:3,
        width:14,

        backgroundColor:'$white'
    });

    const HamburgerBottom = styled('div', {
        height:6,
        width:14,

        backgroundColor:'$white'
    });
    //Hamburger Icon



    return(
        <Menu>
            <Search></Search>

            <Premium>
                Go Premium
            </Premium>

            <Hamburger>
                <HamburgerTop></HamburgerTop>
                <HamburgerBottom></HamburgerBottom>
            </Hamburger>
        </Menu>
    );
}