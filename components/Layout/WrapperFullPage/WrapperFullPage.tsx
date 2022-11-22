import { styled } from "../../../stitches.config";

const Div = styled('div', {
    height:'100%',
    width:'100%',
    paddingTop:80,

    backgroundImage:'linear-gradient(to bottom right,#0f3573,#e75971)'
});

export default function WrapperFullPage(props:any){

    return(
        <Div>
            {props.children}
        </Div>
    );
}