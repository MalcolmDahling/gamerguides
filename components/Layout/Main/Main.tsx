import { styled } from "../../../stitches.config";

const StyledMain = styled('main', {
    maxWidth:1100,
    margin:'auto',

    backgroundColor:'$white',
    borderRadius:10,
    boxShadow:'10px 10px 29px #000'
});

export default function Main(props:any){

    return(
        <StyledMain>
            {props.children}
        </StyledMain>
    );
}