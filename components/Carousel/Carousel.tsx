import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Game from './Game';
import { styled } from '../../stitches.config';


const StyledSlider = styled(Slider, {

    height:665,
    borderRadius:'10px 10px 0px 0px',

    overflow:'hidden',

    variants:{
        height:{
            mobile:{
                height:500
            }
        }
    }
});


interface game{
    game: 'cod' | 'pokemon' | 'grounded' | 'xenoblade' | 'gothamKnights';
    slug:string;
    logo:string;
    title:string;
    desc:string;
    review?:boolean;
}


export default function Carousel(){

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
    };

    const games:game[] = [
        {
            game:"cod",
            slug:"call-of-duty-modern-warfare-ii",
            logo:"cod_logo.webp",
            title:"Call of Duty: Modern Warfare II",
            desc:"Call of Duty: Modern Warfare II is a first-person shooter developed by Infinity Ward & published by Activision. It is a direct sequel to the 2019 reboot and serves as the 19th installment in the overall Call of Duty series."
        },
        {
            game:"pokemon",
            slug:"pokemon-scarlet-and-violet",
            logo:"pokemon_logo.png",
            title:"Pokémon Scarlet & Violet",
            desc:"Pokémon Scarlet and Pokémon Violet are 2022 role-playing video games developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch. They are part of the 9th generation of Pokemon games."
        },
        {
            game:"grounded",
            slug:"grounded",
            logo:"grounded_logo.png",
            title:"Grounded",
            desc:"Grounded is a survival video game developed by Obsidian Entertainment and published by Xbox Game Studios. It was released for PC and Xbox One on September 27, 2022."
        },
        {
            game:"xenoblade",
            slug:"xenoblade-chronicles-3",
            logo:"xenoblade_logo.png",
            title:"Xenoblade Chronicles 3",
            desc:"Xenoblade Chronicles 3 is a 2022 action RPG developed by Monolith Soft & published by Nintendo for the Nintendo Switch."
        },
        {
            game:"gothamKnights",
            slug:"gotham-knights",
            logo:"gotham_knights_logo.png",
            title:"Gotham Knights",
            desc:"Gotham Knights is an action RPG developed by WB Games Montréal published by Warner Bros. The game focuses on the characters Nightwing, Batgirl, Robin Red Hood as they attempt to restore justice to Gotham during a period of decline in the wake of Batman’s death.",
            review:true
        }
    ];

    
    return(
        <StyledSlider {...settings} height={{'@carouselHeightMobile': 'mobile'}}>
 
            {
                games.map(game => {

                    return(
                        <Game
                            game={game.game}
                            slug={game.slug}
                            logo={game.logo}
                            title={game.title}
                            desc={game.desc}
                            review={game.review}
                        ></Game>
                    );
                })
            }

        </StyledSlider>
    );
}