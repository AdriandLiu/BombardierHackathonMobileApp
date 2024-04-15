import React from "react";
import { StyleSheet, Picker, View } from "react-native";
import { DefaultTheme } from "../Theme";

export function DropDown({height, width, items, value, onValueChange}) {
    let pickerWidth = width ?? 255;
    let pickerHeight = height ?? 50;

    return (
        <View style={styles.ViewStyles}>
            <Picker style={[styles.PickerStyles, {width: pickerWidth, height: pickerHeight}]} prompt={"Select an option"} selectedValue={value} onValueChange={(value, pos) => onValueChange(value, pos)}>
                {items.map(item => <Picker.Item key={item} label={item} value={item}/>)}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    PickerStyles: {
        color: DefaultTheme.colour.primary,
        paddingRight: 10,
        paddingLeft: 10,
    },
    ViewStyles: {
        borderColor: DefaultTheme.colour.primary,
        borderWidth: 2,
    }
})