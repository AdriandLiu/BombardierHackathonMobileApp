import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View, TextInput, TouchableHighlight } from 'react-native';
import {DefaultTheme} from "../Theme";

export function SearchBar({placeHolder, onSearch, height, width, fontSize}) {
    const [value, setValue] = useState("");
    const [focus, setFocus] = useState(false);

    let containerHeight = height ?? 50; 
    let size = containerHeight - 20;
    let containerWidth = width ?? 255;
    let textWidth = containerWidth - 20 - size;
    let textFontSize = fontSize ?? 16;

    return (    
        <View style={[styles.Container, {width: containerWidth, height: containerHeight}]}>
            <TextInput style={[styles.textInput, {width: textWidth, fontSize: textFontSize}]} placeholder={placeHolder ?? "Search"} placeholderTextColor={DefaultTheme.colour.primary} onChangeText={(text => setValue(text))}/>
            <TouchableHighlight onPress={() => onSearch(value)} onPressIn={() => setFocus(true)} onPressOut={() => setFocus(false)} underlayColor={"rgba(0,0,0,0)"}>
                <Feather name="search" size={size} color={focus ? DefaultTheme.colour.secondary : DefaultTheme.colour.primary} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignItems: "center",
        borderColor: DefaultTheme.colour.primary,
        borderWidth: 2,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingRight: 10,
        paddingLeft: 10,
    },
    textInput: {
        color: DefaultTheme.colour.primary,
        overflow: "scroll",
    }
});