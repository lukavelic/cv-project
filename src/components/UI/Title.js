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

        if(this.props.inEdit) {
            return (
                <Card>
                    <input type='text' placeholder="Please type details here..." defaultValue={this.props.text ? this.props.text : ''}/>
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