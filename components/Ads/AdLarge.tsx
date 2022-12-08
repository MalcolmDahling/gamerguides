import { styled } from "../../stitches.config";
import Subscribe from "./Subscribe";

const Div = styled('div', {

    maxWidth:1000,
    margin:'auto',
    height:300,
    marginTop:20,
    position:'relative',

    borderRadius:10,
    backgroundColor:'rgba(0,0,0,0.8)'
});

export default function AdLarge(){

    return(
        <Div>
            <Subscribe width="large"></Subscribe>
        </Div>
    );
}