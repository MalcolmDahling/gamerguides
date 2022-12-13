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

        bp0:'(max-width:1100px)',
        bp1:'(max-width:1000px)',
        bp2:'(max-width:900px)',
        bp3:'(max-width:600px)',
        bp4:'(max-width:450px)',
    }
});