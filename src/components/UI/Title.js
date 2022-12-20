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
        const key = this.props.id

        return (
            <Card className='title' key={key}>
                {text}
                <InputControls/>
            </Card>
        );
    };
};

export default Title;