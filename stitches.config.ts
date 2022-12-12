import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({

    theme:{
        colors:{
            black:'#000000',
            white:'#ffffff',
            grayLight:'#d9d9d9',
            grayMid:'#40444c',
            grayMenu:'#808080',
            grayDark:'#333333',

            blue:'#0000ff',
            blueHover:'#4275b9',

            red:'#e75971',
            green:'#20a82c',
            orange:'#d09400',

            tipBackground:'#fee2b2',
            
            textBlack:'#292B2C',
            textYellow:'#d09400',
            textLink:'#0275d5',
        }
    },

    media:{
        premiumButtonDesktop:'(min-width:530px)',
        premiumButtonMobile:'(max-width:529px)',

        menuPaddingRightDesktop:'(min-width:900px)',
        menuPaddingRightMobile:'(max-width:899px)',

        logoAndFooterDesktop:'(min-width:621px)',
        logoAndFooterMobile:'(max-width:620px)',

        carouselMobile:'(max-width:599px)',
        carouselHeightMobile:'(max-width:620px)',

        indexMenuBottom:'(max-width:1029px)',

        indexGamesGrid_3_columns_adRight:'(max-width:1100px)',
        indexGamesGrid_5_columns:'(max-width:899px)',
        indexGamesGrid_4_columns:'(max-width:880px)',
        indexGamesGrid_3_columns:'(max-width:660px)',
        indexGamesGrid_2_columns:'(max-width:440px)',
    }
});