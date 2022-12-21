import React from "react";
import './Description.css';
import InputControls from "../InputControls";
import Card from "./Card";

class Description extends React.Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        const clickController = (data) => {
            this.props.clickController(data);
        };

        const inputController = (e) => {
            this.props.inputController(e);
        }

        if(this.props.inEdit) {
            return (
                <Card>
                    <input type='text' id={this.props.id} placeholder="Please type details here..." data-description={true} onChange={inputController} defaultValue={this.props.text ? this.props.text : ''}/>
                    <InputControls description={true} inEdit={this.props.inEdit} id={this.props.id} determineClickData={clickController}/>
                </Card>
            );
        } else {
            return (
                <Card>
                    <p className="text-description" id={this.props.id}>
                        {this.props.text}
                    </p>
                    <InputControls description={true} inEdit={this.props.inEdit} id={this.props.id} determineClickData={clickController}/>
                </Card>
            );
        };
    };
};

export default Description;