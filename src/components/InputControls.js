import React from 'react';
import './InputControls.css';
import Card from './UI/Card';
import { ReactComponent as EditButton } from '../assets/pencil.svg';
import { ReactComponent as DeleteButton } from '../assets/close-thick.svg';
import { ReactComponent as CheckButton } from '../assets/check-bold.svg';

class InputControls extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const actionHandler = (e) => {
            this.props.actionHandler(e);
        };

        if(this.props.inEdit) {
            return (
                <Card className='button-container'>
                    <CheckButton className='button' data-type='check' data-parenttype={this.props.type} id={this.props.id} data-parentid={this.props.parentId} onClick={actionHandler}/>
                    <DeleteButton className='button' data-type='delete' data-parenttype={this.props.type} id={this.props.id} data-parentid={this.props.parentId} onClick={actionHandler}/>
                </Card>
            )
        } else {
            return (
                <Card className='button-container'>
                    <EditButton className='button' data-type='edit' data-parentyype={this.props.type} id={this.props.id} data-parentid={this.props.parentId} onClick={actionHandler}/>
                    <DeleteButton className='button' data-type='delete' data-parenttype={this.props.type} id={this.props.id} data-parentid={this.props.parentId} onClick={actionHandler}/>
                </Card>
            )
        };        
    };
};

export default InputControls;