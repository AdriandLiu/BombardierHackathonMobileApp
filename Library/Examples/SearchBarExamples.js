import React from "react";
import { SearchBar } from "../Components/SearchBar.js";
import { Alert } from "react-native";

export function SearchBarExamples() {
    return(
        <>
            <SearchBar onSearch={(text) => Alert.alert(text)}/>
            <SearchBar onSearch={(text) => Alert.alert(text)} placeHolder={"Place Holder"}/>
            <SearchBar onSearch={(text) => Alert.alert(text)} placeHolder={"Larger"} height={100} width={300} fontSize={30}/>            
        </>
    );
}