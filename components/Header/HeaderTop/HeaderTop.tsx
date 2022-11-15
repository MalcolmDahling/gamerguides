import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import { styled } from "../../../stitches.config";
import Menu from './Menu';


export default function HeaderTop(){

    const Div = styled('div', {
        height:60,
        backgroundColor:'$black',

        display:'flex',
    });

    const Link = styled('a', {
        height:60,
        flexBasis:'90%',

        paddingLeft:'13rem',

        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    });



    return(
        <Div>
            <Link href="/">
                <Image src={logo} alt="Logo"></Image>
            </Link>

            <Menu></Menu>
        </Div>
    );
}