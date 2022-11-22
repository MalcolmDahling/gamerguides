import Link from "next/link";
import { styled } from "../../../../stitches.config";
import Menu from './Menu/Menu';


export default function HeaderTop(){

    const Div = styled('div', {
        width:'100vw',
        height:60,
        position:'fixed',
        top:0,
        zIndex:1,
        backgroundColor:'$black',
    });

    const StyledLink = styled(Link, {
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
                mobile:{
                    backgroundImage:'url(/images/logo/logo_phone.png)',
                    backgroundSize:'50%',
                }
            }
        }
    });



    return(
        <Div>
            <StyledLink href="/">
                <Img source={{'@logoAndFooterDesktop': 'desktop', '@logoAndFooterMobile': 'mobile'}}></Img>
            </StyledLink>

            <Menu></Menu>
        </Div>
    );
}