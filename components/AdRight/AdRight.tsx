import { styled } from "../../stitches.config";

const Div = styled('div', {

    width:330,
    height:300,
    position:'relative',
    marginBottom:50,

    borderRadius:10,
    backgroundColor:'$grayDark'
});

const Subscribe = styled('div', {

    width:165,
    height:38,
    position:'absolute',
    transform:'translate(-50%)',
    left:'50%',
    bottom:-38,

    backgroundColor:'$black',
    borderRadius:'0px 0px 5px 5px',
    
});

const P = styled('p', {

    paddingTop:6,
    margin:0,

    color:'$orange',
    fontSize:'8pt',
    textAlign:'center'
});

const Img = styled('img', {

    width:11,
    marginRight:1,
});

export default function AdRight(){

    return(
        <Div>

            <Subscribe>
                <P>
                    <Img src="/images/ads/star.png"></Img>
                    Subscribe to Premium to <br/> Remove Ads
                </P>
            </Subscribe>
        </Div>
    );
}