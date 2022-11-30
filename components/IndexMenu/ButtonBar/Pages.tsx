import { styled } from "../../../stitches.config";

const Div = styled('div', {

    width:52,
    height:27,

    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    fontSize:12,
    backgroundColor:'$white'
});

interface props{
    currentPage:number;
    maxPages:number;
}

export default function Pages(props:props){

    return(
        <Div>
            <span>{props.currentPage}/{props.maxPages}</span>
        </Div>
    );
}