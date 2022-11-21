import { styled } from "../../stitches.config";

const Div = styled('div', {
    height:'100vh',
    width:'100vw',

    backgroundImage:'linear-gradient(to bottom right,#0f3573,#e75971)'
});

export default function WrapperFullPage(props:any){

    return(
        <Div>
            {props.children}
        </Div>
    );
}