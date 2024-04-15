import React, { useState } from "react";
import { RadioButton } from 'react-native-paper';
import { Radio } from "../Components/RadioButton";

export function RadioExamples({}) {
    const [value, setValue] = useState(false);
    const onPress = (buttonValue) => {setValue(buttonValue)};

    return (
        <RadioButton.Group value={value}>
            <Radio value={"button1"} onPress={onPress} status={"checked"}/>
            <Radio value={"button2"} onPress={onPress}/>
        </RadioButton.Group>
    )
}

