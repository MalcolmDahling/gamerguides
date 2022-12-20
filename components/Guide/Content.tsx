import Link from "next/link";
import { IGame } from "../../models/IGame";
import { styled } from "../../stitches.config";

const Outer = styled('div', {

    marginTop:20,

    boxShadow:'10px 10px 29px #000',
    borderRadius:10,
});

const Top = styled('div', {

    padding:20,

    borderRadius:'10px 10px 0px 0px',
    backgroundColor:'$blackTransparent',
});

const Breadcrumbs = styled('div', {

    
});

const StyledLink = styled(Link, {

    color:'$grayLink',
    textDecoration:'none'
});

const Span = styled('span', {

    color:'$grayLink',
    fontWeight:'bold'
});

const Div = styled('div', {

    borderRadius:'0px 0px 10px 10px',
    backgroundColor:'$white',
});

interface props{
    game?:IGame;
}

export default function Content(props:props){

    return(

        <>
            {props.game?.guide.sectionData.map(sectionData => {

                return(
                    
                    <>
                        {sectionData.sectionChapter.map(sectionChapter => {

                            return(

                                <>
                                    {sectionChapter.chapterPaths.map((chapterPath, i) => {

                                        return(
                                            <Outer key={i}>
                                                <Top>
                                                    <Breadcrumbs>
                                                        <StyledLink href=""></StyledLink>
                                                        <Span>{' \> '}</Span>
                                                        <StyledLink href=""></StyledLink>
                                                    </Breadcrumbs>
                                                </Top>
                                    
                                                <Div>
                                                    asdf
                                                </Div>
                                            
                                            </Outer>
                                        );
                                    })}
                                </>
                            );
                        })} 
                    </>
                );
            })} 
        </>
    );
}