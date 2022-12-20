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
        if(this.props.description) {
            if(this.props.inEdit) {
                return (
                    <Card className='button-container'>
                        <CheckButton className='button' onClick={() => {console.log('clickity click')}}/>
                    </Card>
                );
            } else {
                return (
                    <Card className='button-container'>
                        <EditButton className='button'/>
                    </Card>
                ); 
            }
            
        } else {
            return (
                <Card className='button-container'>
                    <EditButton className='button'/>
                    <DeleteButton className='button'/>
                </Card>
            );
        }
        
    };
};

export default InputControls;