import { StyleSheet,StatusBar } from "react-native"

export const primary="#EB9FEF";
export const secondary="#FECEE9";
export const thirty="#545677";
export const forthy="#03254E";
export const firthy="#011C27";
export const sixty="#2A2C42";
export const full="100%";
export const style= StyleSheet.create({
    mainContainer:{
        paddingHorizontal:10,
        height:"100%",
        backgroundColor:thirty
    },
    bgPrimary:{
        backgroundColor:primary,
        color:"white"
    },
    btnPrimary:{
        width:"100px",
        backgroundColor:primary,
        color:"white"
    },
    btnSecondary:{
        width:"100px",
        backgroundColor:secondary,
        color:"white"
    },
    btnSecondary:{
        width:"100px",
        backgroundColor:thirty,
        color:"white"
    }
});
