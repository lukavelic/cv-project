import React from 'react';
import './Title.css';
import Card from './Card';

class Title extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const text = this.props.text;

        return (
            <Card className='title'>
                {text}
            </Card>
        );
    };
};

export default Title;