import React, {useState} from "react";
import {DropDown} from "../Components/DropDown.js";

export function DropDownExamples({}) {
    const [value, setValue] = useState("item1");
    let items = ["Item 1", "Item 2", "Item 3", "You guessed it, Item 4"];


    return (
        <>
            <DropDown items={items} value={value} onValueChange={(newValue) => setValue(newValue)}/>
            <DropDown height={100} width={400} items={items} value={value} onValueChange={(newValue) => setValue(newValue)}/>
        </>
    )
}