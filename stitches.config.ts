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

            red:'#e75971',
            blue:'#0000ff',
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
    }
});