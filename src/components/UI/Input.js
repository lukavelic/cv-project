import React from "react";
import './Input.css';
import InputControls from "../InputControls";
import Card from "./Card";

class Input extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Card>
                <input type='text' placeholder="Please type details here..."/>
                <InputControls/>
            </Card>
        );
    };
};

export default Input;