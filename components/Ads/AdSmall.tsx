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
    backgroundColor:'$grayDark'
});



export default function AdSmall(){

    return(
        <Container>
            <Ad>
                <Subscribe width="small"></Subscribe>
            </Ad>
        </Container>
    );
}