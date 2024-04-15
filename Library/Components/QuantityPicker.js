import React, { useState } from "react";
import { TouchableHighlight, StyleSheet, View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { DefaultTheme } from "../Theme";


export function QuantityPicker({size, onValueChange, value}) {
    const [minusFocus, setMinusFocus] = useState(false);
    const [plusFocus, setPlusFocus] = useState(false);

    let iconSize = 30;
    let containerStyle = styles.containerNormal;
    let sectionStyle = styles.sectionNormal;

    if (size === "xSmall") {
        iconSize = iconSizes[size];
        containerStyle = styles.containerXSmall;
        sectionStyle = styles.sectionXSmall;
    } else if (size === "small") {
        iconSize = iconSizes[size];
        containerStyle = styles.containerSmall;
        sectionStyle = styles.sectionSmall;
    } else if (size === "large") {
        iconSize = iconSizes[size];
        containerStyle =  styles.containerLarge;
        sectionStyle = styles.sectionLarge;
    }

    return (    
        <View style={[styles.container, containerStyle]}>  
            <TouchableHighlight style={[styles.sectionStyles, sectionStyle]} underlayColor={"rgba(0,0,0,0)"} onPressIn={() => setMinusFocus(true)} onPressOut={() => setMinusFocus(false)} onPress={() => onValueChange(value - 1)}>
                <Feather name="minus" size={iconSize} color={minusFocus ? DefaultTheme.colour.secondary : DefaultTheme.colour.primary}/>
            </TouchableHighlight>
            <View style={[styles.sectionStyles, sectionStyle, styles.sideBorders]}>
                <Text style={styles.textStyles}>{value}</Text>
            </View>
            <TouchableHighlight style={[styles.sectionStyles, sectionStyle]} underlayColor={"rgba(0,0,0,0)"} onPressIn={() => setPlusFocus(true)} onPressOut={() => setPlusFocus(false)} onPress={() => onValueChange(value + 1)}>
                <Feather name="plus" size={iconSize} color={plusFocus ? DefaultTheme.colour.secondary : DefaultTheme.colour.primary}/>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: DefaultTheme.colour.primary,
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    textStyles: {
        color: DefaultTheme.colour.primary,
        fontSize: 20,
        fontWeight: "bold",
    },
    sectionStyles: {
        alignItems: "center",
        justifyContent: "center",
    },
    sideBorders: {
        borderColor: DefaultTheme.colour.primary,
        borderLeftWidth: 2,
        borderRightWidth: 2,
    },
    sectionXSmall: {
        height: 40,
        width: 45
    },
    containerXSmall: {
        height: 40,
        width: 135
    },
    sectionSmall: {
        height: 45,
        width: 50
    },
    containerSmall: {
        height: 45,
        width: 150
    },
    sectionNormal: {
        height: 50, 
        width: 55,
    },
    containerNormal: {
        height: 50,
        width: 165
    }, 
    sectionLarge: {
        height: 55,
        width: 60
    },
    containerLarge: {
        height: 55,
        width: 190,
    }
}); 

const iconSizes = {
    "xSmall": 20,
    "small": 25,
    "normal": 30,
    "large": 35
}