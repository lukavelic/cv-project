import React from 'react';
import './InputControls.css';
import Card from './UI/Card';
import { ReactComponent as EditButton } from '../assets/pencil.svg';
import { ReactComponent as DeleteButton } from '../assets/close-thick.svg';

class InputControls extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Card className='input'>
                <EditButton className='button'/>
                <DeleteButton className='button'/>
            </Card>
        );
    };
};

export default InputControls;