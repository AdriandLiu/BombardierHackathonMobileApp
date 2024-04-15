import React from "react";
import { RadioButton } from 'react-native-paper';

export function Radio({value, status, onPress, disabled}) {
    return (
        <RadioButton color={"#D19000"} status={status} value={value} onPress={() => onPress(value)} disabled={disabled}/>
    )
}