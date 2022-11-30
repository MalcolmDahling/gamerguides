import { useEffect, useState } from "react";
import { styled } from "../../../stitches.config";
import Button from "./Button";
import LeftRightButton from "./LeftRightButton";
import Pages from "./Pages";
import UpDownButton from "./UpDownButton";

const Div = styled('div', {

    height:'100%',
    
    display:'flex',
    gap:20,
    alignItems:'center'
});

const Div2 = styled('div', {

    display:'flex',
    gap:5
});

const Div3 = styled('div', {
    display:'flex',
    gap:1
});

export default function ButtonBar(){

    const [isActiveButtons, setIsActiveButtons] = useState(0);
    const [isActiveUpDown, setIsActiveUpDown] = useState(1);

    const [isActiveLeft, setIsActiveLeft] = useState(false);
    const [isActiveRight, setIsActiveRight] = useState(true);
    const [pageCount, setPageCount] = useState(1);
    const maxPages:number = 5;


    function pageCountChange(input:string){

        if(input === 'subtract' && pageCount !== 1){
            setPageCount(pageCount - 1);
        }

        else if(input === 'add' && pageCount !== maxPages){
            setPageCount(pageCount + 1);
        }
    }


    useEffect(() => {

        if(pageCount === 1){
            setIsActiveLeft(false);
        }
        else if(pageCount > 1){
            setIsActiveLeft(true);
        }

        if(pageCount < maxPages){
            setIsActiveRight(true);
        }
        else{
            setIsActiveRight(false);
        }

    }, [pageCount]);


    return(
        <Div>

            <Button
                text="Release"
                image="release.png"
                isActive={isActiveButtons === 0 ? true : false}
                onClick={() => {setIsActiveButtons(0)}}
            ></Button>

            <Button
                text="Title"
                image="title.png"
                isActive={isActiveButtons === 1 ? true : false}
                onClick={() => {setIsActiveButtons(1)}}
            ></Button>

            <Button
                text="Publisher"
                image="publisher.png"
                isActive={isActiveButtons === 2 ? true : false}
                onClick={() => {setIsActiveButtons(2)}}
            ></Button>

            <Div2>
                <UpDownButton
                    direction="up"
                    isActive={isActiveUpDown === 0 ? true : false}
                    onClick={() => {setIsActiveUpDown(0)}}
                ></UpDownButton>

                <UpDownButton
                    direction="down"
                    isActive={isActiveUpDown === 1 ? true : false}
                    onClick={() => {setIsActiveUpDown(1)}}
                ></UpDownButton>
            </Div2>

            <Div3>
                <LeftRightButton
                    direction="left"
                    isActive={isActiveLeft}
                    onClick={() => {pageCountChange('subtract')}}
                ></LeftRightButton>

                <Pages currentPage={pageCount} maxPages={maxPages}></Pages>

                <LeftRightButton
                    direction="right"
                    isActive={isActiveRight}
                    onClick={() => {pageCountChange('add')}}
                ></LeftRightButton>
            </Div3>

        </Div>
    );
}