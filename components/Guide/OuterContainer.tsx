import React from "react";
import { styled } from "../../stitches.config";

const Div = styled('div', {

    height:'fit-content',
    display:'flex',
    
    borderRadius:10,
    backgroundColor:'$blackTransparent',
    boxShadow:'10px 10px 29px #000',

    variants:{
        padding:{
            10:{
                padding:10,
            },

            20:{
                padding:20,
            }
        }
    }
});

interface props{
    children:React.ReactNode;
    padding:10 | 20;
}

export default function OuterContainer(props:props){

    return(
        <Div padding={props.padding}>
            {props.children}
        </Div>
    );
}