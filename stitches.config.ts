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
        premiumButtonPhone:'(max-width:529px)',

        logoDesktop:'(min-width:621px)',
        logoPhone:'(max-width:620px)',
    }
});