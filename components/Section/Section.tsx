import React from "react";
import { styled } from "../../stitches.config";

const StyledSection = styled('section', {

    variants:{
        marginRight:{
            true:{
                marginRight:60
            }
        }
    }
});

interface props{
    children:React.ReactNode;
    marginRight?:boolean;
}

export default function Section(props:props){

    return(
        <StyledSection marginRight={props.marginRight}>
            {props.children}
        </StyledSection>
    );
}