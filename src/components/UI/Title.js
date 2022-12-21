import React from 'react';
import './Title.css';
import Card from './Card';
import InputControls from '../InputControls';

class Title extends React.Component {
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
                    <input type='text' id={this.props.id} placeholder="Please type details here..." data-description={false} onChange={inputController} defaultValue={this.props.text ? this.props.text : ''}/>
                    <InputControls description={false} inEdit={this.props.inEdit} id={this.props.id} determineClickData={clickController}/>
                </Card>
            );
        } else {
            return (
                <Card>
                    <p>
                        {this.props.text}
                    </p>
                    <InputControls description={false} inEdit={this.props.inEdit} id={this.props.id} determineClickData={clickController}/>
                </Card>
            );
        };
    };
};

export default Title;