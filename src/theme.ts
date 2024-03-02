import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/inter';
import '@fontsource/poppins';

const customTheme = extendTheme({
    fonts: {
        heading: "poppins",
        body: "inter",
    },
    colors: {
        primaryColor: "#2C3237",
        secondaryColor: "#3F3F3F",
        navActiveColor: "#314EF9",
        logoColor: "#404040",
        darkColor: "#000000",
        profileNameColor: "#525252",
        backgroundColor1: "#FAFAFA",
        backgroundColor2: "#FFFFFF",
        placeholderColor: "#4F4F4F",
        sampleColor: "#828282",
        secureColor: "#222222",
        borderColor: "#A1A1A1",
    },
    colorSchemes: {
        blue:"#000",
    },
    fontSizes: {
        logoFS: "23px",
        navlinksFS: "14px",
        profileFS: "16px",
    },
    fontWeights: {
        logoFW: 800,
        navlinksFW: 600,

    },
    lineHeights: {
        logoLH: "28px",
        navlinksLH: "21px",
        profileLH: "24px",
    },
    
    components: {
    Button: {
        variants: {
        solid: {
            backgroundColor: "primary",
            color: "whiteColor",
        },
        ghost: {
            color: "secondary",
        },
        navBar: {
            color: "darkColor",
            fontSize: "18px",
            lineHeight: "29px",
        },
        },
    },
    Heading: {
        variants: {
        "banner_head_lg": {
            fontSize: "52px",
            fontWeight: 900,
            lineHeight: "58.76px",
        },
        "banner_head_sm": {
            fontSize: "40px",
            fontWeight: 900,
            lineHeight: "45.76px",
        },
        "sub_title": {
            fontSize: "18px",
            fontWeight: 800,
            lineHeight: "25px",
        },
        
        },
    },
    Text: {
        variants: {
        "banner_text": {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "26.08px",
        },
        "banner_text2": {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "25px",
        },
        "banner_text3": {
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "22.4px",
        },

        },
    },
    },
});

export default customTheme;