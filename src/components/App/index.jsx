
import React, { useState } from 'react';

import "./App.css";
import Button from "../Button";



const App = () => {


    const [value,setValue]=useState("0")

    const handleButtonPress=content=>()=>{
        const num=parseFloat(value);

        if(content==="AC"){
            setValue("0");
            return;
        }
        
        if(content==="±"){
            setValue((num * (-1)).toString());
            return;
        }


        setValue(parseFloat(value+content).toString())
    }


    return (
        <div className="App">
            <div className="top">16:44</div>
            <div className="display">{value}</div>
            <div className="buttons">
                <Button onButtonClick={handleButtonPress} content="AC" type="function"/>
                <Button onButtonClick={handleButtonPress} content="±"  type="function"/>
                <Button onButtonClick={handleButtonPress} content="%"  type="function"/>
                <Button onButtonClick={handleButtonPress} content="÷" type="operator"/>
                <Button onButtonClick={handleButtonPress} content="7"/>
                <Button onButtonClick={handleButtonPress} content="8"/>
                <Button onButtonClick={handleButtonPress} content="9"/>
                <Button onButtonClick={handleButtonPress} content="×" type="operator"/>
                <Button onButtonClick={handleButtonPress} content="4"/>
                <Button onButtonClick={handleButtonPress} content="5"/>
                <Button onButtonClick={handleButtonPress} content="6"/>
                <Button onButtonClick={handleButtonPress} content="−" type="operator"/>
                <Button onButtonClick={handleButtonPress} content="1"/>
                <Button onButtonClick={handleButtonPress} content="2"/>
                <Button onButtonClick={handleButtonPress} content="3"/>
                <Button onButtonClick={handleButtonPress} content="+" type="operator"/>
                <Button onButtonClick={handleButtonPress} content="0"/>
                <Button onButtonClick={handleButtonPress} content="."/>
                <Button onButtonClick={handleButtonPress} content="=" type="operator"/>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default App;
