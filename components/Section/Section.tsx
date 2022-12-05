import React from "react";
import { styled } from "../../stitches.config";

const StyledSection = styled('section', {

});

interface props{
    children:React.ReactNode;
}

export default function Section(props:props){

    return(
        <StyledSection>
            {props.children}
        </StyledSection>
    );
}