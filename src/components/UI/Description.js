import React from "react";
import './Description.css';
import InputControls from "../InputControls";
import Card from "./Card";

class Description extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        if(this.props.inEdit) {
            return (
                <Card>
                    <input type='text' placeholder="Please type details here..." defaultValue={this.props.text ? this.props.text : ''}/>
                    <InputControls description={true} inEdit={this.props.inEdit}/>
                </Card>
            );
        } else {
            return (
                <Card>
                    <p>
                        {this.props.text}
                    </p>
                    <InputControls description={true} inEdit={this.props.inEdit}/>
                </Card>
            );
        };
    };
};

export default Description;