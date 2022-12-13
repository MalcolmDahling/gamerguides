import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IndexCurrentPage } from "../../atoms/IndexCurrentPage";
import { IndexCurrentTab } from "../../atoms/IndexCurrentTab";
import { IndexMaxPages } from "../../atoms/IndexMaxPages";
import { styled } from "../../stitches.config";
import LeftRightButton from "./LeftRightButton";
import Pages from "./Pages";

const Div = styled('div', {

    display:'flex',
    justifyContent:'center',

    variants:{
        flexBasis:{
            true:{
                flexBasis:'100%'
            }
        },

        bottom:{
            true:{

                position:'absolute',
                transform:'translate(-50%)',
                left:'50%',
                bottom:0
            }
        }
    }
});

interface props{
    flexBasis?:boolean;
    bottom?:boolean;
}

export default function PagesBar(props:props){

    const [isActiveLeft, setIsActiveLeft] = useState(false);
    const [isActiveRight, setIsActiveRight] = useState(true);
    const [pageCount, setPageCount] = useRecoilState(IndexCurrentPage);
    const maxPages = useRecoilValue(IndexMaxPages);
    const indexCurrentTab = useRecoilValue(IndexCurrentTab);
    
    function pageCountChange(input:string){

        if(indexCurrentTab != 'Coming Soon'){

            if(input === 'subtract' && pageCount !== 1){
                setPageCount(pageCount - 1);
            }
    
            else if(input === 'add' && pageCount !== maxPages){
                setPageCount(pageCount + 1);
            }
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

    }, [pageCount, maxPages]);

    return(
        <Div flexBasis={props.flexBasis && {'@bp1' : true}} bottom={props.bottom}>
            <LeftRightButton
                direction="left"
                isActive={isActiveLeft}
                onClick={() => {pageCountChange('subtract')}}
            ></LeftRightButton>

            <Pages currentPage={pageCount} maxPages={indexCurrentTab === 'Now Available' ? maxPages : 1}></Pages>

            <LeftRightButton
                direction="right"
                isActive={indexCurrentTab === 'Now Available' ? isActiveRight : false}
                onClick={() => {pageCountChange('add')}}
            ></LeftRightButton>
        </Div>
    );
}