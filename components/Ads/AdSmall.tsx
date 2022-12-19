import { styled } from "../../stitches.config";
import Subscribe from "./Subscribe";

const Container = styled('div', {

    height:'100%',
    width:330,
});

const Ad = styled('div', {

    
    height:300,
    position:'sticky',
    top:70,
    marginBottom:35,

    borderRadius:10,
    backgroundColor:'$grayDark',

    variants:{
        transparentBackgroundColor:{
            true:{
                backgroundColor:'$blackTransparent'
            }
        }
    }
});

interface props{
    transparentBackgroundColor?:boolean;
}

export default function AdSmall(props:props){

    return(
        <Container>
            <Ad transparentBackgroundColor={props.transparentBackgroundColor}>
                <Subscribe width="small"></Subscribe>
            </Ad>
        </Container>
    );
}