import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import {DefaultTheme} from "../Theme";

export function Button({onPress, title, leftIcon, rightIcon, fill, disabled}) {
    const [focus, setFocus] = useState(false);
    let iconColour = "base";

    if (disabled && !fill) {
        iconColour = "disabled";
    } else {
        if (!fill && !focus)
            iconColour = "primary";
    }

    //Set the styles of the view button based on props and state
    let viewStyles = [styles.ButtonBaseStyles];
    let textStyles = [styles.textBaseStyles];

    //Add Margins if Icon is rendered
    if (rightIcon)
        textStyles.push(styles.iconRight);

    if (leftIcon)
        textStyles.push(styles.iconLeft);

    //Set styles based on focus and disbaled
    if (focus) {
        viewStyles.push(styles.ButtonOnClick);
        textStyles.push(styles.textOnClick);
    } else {
        if (fill) {
            viewStyles.push(disabled ? styles.ButtonFilledDisabled : styles.ButtonFilledBackground);
            textStyles.push(disabled ? styles.textFilledDisabled : styles.textFilledColour);
        }
        else if (disabled) {
            viewStyles.push(styles.ButtonDisabled);
            textStyles.push(styles.textDisabled);
        }
    }   

    return (
        <TouchableHighlight onPress={onPress} underlayColor={"rgba(0,0,0,0)"} onPressIn={() => setFocus(true)} onPressOut={() => setFocus(false)} disabled={disabled}>
            <View style={viewStyles}>
                {leftIcon ? React.cloneElement(leftIcon, {style: {color: DefaultTheme.colour[iconColour], borderColor: "rgba(0,0,0,0)"}}) : <></>}
                <Text style={textStyles}>{title}</Text>
                {rightIcon ? React.cloneElement(rightIcon, {style: {color: DefaultTheme.colour[iconColour], borderColor: "rgba(0,0,0,0)"}}) : <></>}
            </View>
        </TouchableHighlight>
    );
  }

  const styles = StyleSheet.create({
    ButtonBaseStyles: {
        alignItems: "center",
        borderWidth: 2,
        borderColor: DefaultTheme.colour.primary,
        borderRadius: 100,
        borderStyle: "solid",
        flexDirection: "row",
        justifyContent: "center",
        padding: 19,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: DefaultTheme.colour.base,
    },
    ButtonFilledBackground: {
        backgroundColor: DefaultTheme.colour.primary,
    },
    ButtonFilledDisabled: {
        backgroundColor: DefaultTheme.colour.disabled,
        borderColor: DefaultTheme.colour.disabled,
    },
    ButtonDisabled: {
        borderColor: DefaultTheme.colour.disabled,
    },
    ButtonOnClick : {
        backgroundColor: DefaultTheme.colour.secondary,
        borderColor: DefaultTheme.colour.secondary,
    },  
    textBaseStyles: {
        color: DefaultTheme.colour.primary,
        fontWeight: "600",
        fontSize: 14,
        textTransform: 'uppercase',
    },
    textFilledDisabled: {
        color: DefaultTheme.colour.base
    },
    textDisabled: {
        color: DefaultTheme.colour.disabled
    },  
    textOnClick: {
        color: DefaultTheme.colour.base
    },
    textFilledColour: {
        color: DefaultTheme.colour.base,
    },
    iconRight: {
        marginRight: 5
    },
    iconLeft: {
        marginLeft: 5
    }
  });
  
   