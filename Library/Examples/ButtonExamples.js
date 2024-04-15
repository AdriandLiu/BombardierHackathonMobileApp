import React from "react";
import { Button } from "../Components/Button";
import { Feather, Fontisto } from '@expo/vector-icons';

export function ButtonExamples({}) {
    return (
        <>
            <Button title="search" fill={true}/>
            <Button title="search"/>
            <Button title="search" fill={true} rightIcon={<Feather name="arrow-right" size={20}/>}/>
            <Button title="search" rightIcon={<Feather name="arrow-right" size={20}/>}/>
            <Button title="search" fill={true} rightIcon={<Feather name="arrow-right" size={20}/>} disabled={true}/>
            <Button title="search" rightIcon={<Feather name="arrow-right" size={20}/>} disabled={true}/>
            <Button title="search" fill={true} leftIcon={<Fontisto name="world-o" size={20}/>}/>
            <Button title="search" leftIcon={<Fontisto name="world-o" size={20}/>}/>
        </>
    )
}