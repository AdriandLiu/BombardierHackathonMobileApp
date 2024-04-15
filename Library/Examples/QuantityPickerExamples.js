import React, {useState} from "react";
import { QuantityPicker } from "../Components/QuantityPicker.js";

export function QuanityPickerExamples() {
    const [value, setValue] = useState(0);

    const onChange = (value) => {
        if (value < 0)
            return;

        setValue(value);
    }

    return(
        <>
            <QuantityPicker size={"xSmall"} onValueChange={onChange} value={value}/>
            <QuantityPicker size={"small"} onValueChange={onChange} value={value}/>
            <QuantityPicker size={"normal"} onValueChange={onChange} value={value}/>
            <QuantityPicker size={"large"} onValueChange={onChange} value={value}/>
        </>
    );
}