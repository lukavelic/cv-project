import React from 'react';
import './Title.css';
import Card from './Card';
import InputControls from '../InputControls';

class Title extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const text = this.props.text;

        return (
            <Card className='title'>
                {text}
                <InputControls/>
            </Card>
        );
    };
};

export default Title;