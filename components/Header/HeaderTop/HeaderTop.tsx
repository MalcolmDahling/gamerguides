import { styled } from "../../../stitches.config";
import Menu from './Menu/Menu';


export default function HeaderTop(){

    const Div = styled('div', {
        width:'100vw',
        height:60,
        position:'fixed',
        backgroundColor:'$black',
    });

    const Link = styled('a', {
        zIndex:-1,
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
    });

    const Img = styled('div', {
        width:170,
        height:40,

        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',

        variants:{
            source:{
                desktop:{
                    backgroundImage:'url(/images/logo/logo_desktop.png)',
                    backgroundSize:'100%',

                },
                phone:{
                    backgroundImage:'url(/images/logo/logo_phone.png)',
                    backgroundSize:'50%',
                }
            }
        }
    });



    return(
        <Div>
            <Link href="/">
                <Img source={{'@logoDesktop': 'desktop', '@logoPhone': 'phone'}}></Img>
            </Link>

            <Menu></Menu>
        </Div>
    );
}