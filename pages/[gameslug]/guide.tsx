import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useBreakpoint from "use-breakpoint";
import AdSmall from "../../components/Ads/AdSmall";
import InfoBox from "../../components/Guide/InfoBox";
import TopBar from "../../components/Guide/TopBar";
import Section from "../../components/Section/Section";
import { IGame } from "../../models/IGame";
import { styled } from "../../stitches.config";

const FlexDiv = styled('div', {

    maxWidth:1110,
    margin:'auto',

    display:'flex',
    justifyContent:'space-between',
    gap:20,
});

const Div = styled('div', {

    width:'100%',

    display:'flex',
    flexDirection:'column',
    gap:20
});

const BREAKPOINTS = { low: 1, high: 1110 };

export default function Game(){

    const [currentGame, setCurrentGame] = useState<IGame>();

    const router = useRouter();
    const {gameslug} = router.query;

    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'high');


    async function fetchGames(){

        const res = await axios.get<IGame[]>('/json/guide_formatted.json');
        setCurrentGame(res.data.find(element => element.gameSlug === gameslug));

        let found = res.data.find(element => element.gameSlug === gameslug); //remove line when everything is working
        console.log(found); //remove line when everything is working
    }

    useEffect(() => {

        fetchGames();
    }, []);

    return(
        <FlexDiv>

            <Div>
                <TopBar game={currentGame}></TopBar>
                <InfoBox game={currentGame}></InfoBox>
            </Div>

            {breakpoint === 'high' && 
                <Section>
                    <AdSmall transparentBackgroundColor={true}></AdSmall>
                </Section>
            }
        </FlexDiv>
    );
}