import { styled } from "../../stitches.config";

const Button = styled('button', {

    padding:'6px 12px',

    fontSize:'9pt',
    backgroundColor:'$white',
    border:'1px solid #D8E3E6',
    
    variants:{
        direction:{
            left:{
                borderRadius:'100px 0px 0px 100px'
            },
            right:{
                borderRadius:'0px 100px 100px 0px'
            }
        },

        active:{
            true:{
                cursor:'pointer',

                '&:hover':{
                    color:'$white',
                    backgroundColor:'$blueHover'
                },
            },
            false:{
                color:'$grayLight'
            }
        }
    }
});

type props = {
    direction:'left' | 'right';
    isActive:boolean;
    onClick:() => void;
}

export default function LeftRightButton(props:props){

    return(
        <Button
            direction={props.direction}
            active={props.isActive}
            onClick={props.onClick}
        >
            {props.direction === 'left' ? '◀︎' : '▶︎'}
        </Button>
    );
}