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
            lightGray:'#d9d9d9',
            midGray:'#40444c',
            darkGray:'#333333',

            red:'#e75971',
            blue:'#0000ff',
            green:'#20a82c',
            orange:'#d09400',

            tipBackground:'#fee2b2',
            
            textBlack:'#292B2C',
            textYellow:'#d09400',
            textLink:'#0275d5',
        }
    }
});