import React from "react";
import './Description.css';
import InputControls from "../InputControls";
import Card from "./Card";

class Description extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Card>
                <input type='text' placeholder="Please type details here..."/>
                <InputControls isItAnInput={true}/>
            </Card>
        );
    };
};

export default Description;