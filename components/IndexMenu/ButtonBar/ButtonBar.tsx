import { useState } from "react";
import { styled } from "../../../stitches.config";
import Button from "./Button";

const Div = styled('div', {

    height:'100%',
    
    display:'flex',
    gap:20,

    alignItems:'center'
});

export default function ButtonBar(){

    const [isActive, setIsActive] = useState(0);

    return(
        <Div>
            <Button text="Release" image="release.png" isActive={isActive === 0 ? true : false} onClick={() => {setIsActive(0)}}></Button>
            <Button text="Title" image="title.png" isActive={isActive === 1 ? true : false} onClick={() => {setIsActive(1)}}></Button>
            <Button text="Publisher" image="publisher.png" isActive={isActive === 2 ? true : false} onClick={() => {setIsActive(2)}}></Button>
        </Div>
    );
}