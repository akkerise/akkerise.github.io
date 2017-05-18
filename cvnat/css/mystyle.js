import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "Helvetica, sans-serif"
    },
    "slides": {},
    "slides page-one p:first-child": {
        "color": "yellow"
    },
    "slides page-one p": {
        "color": "red",
        "position": "relative",
        "fontSize": "$font_size_text_small"
    },
    "slides page-one p i": {
        "fontSize": "88%"
    },
    "slides page-one p small": {
        "position": "absolute",
        "top": 100,
        "right": 0
    },
    "slides page-four p:last-child": {
        "textAlign": "right !important",
        "fontSize": "66%"
    }
});