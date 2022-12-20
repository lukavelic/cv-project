import React from 'react';
import './Cv.css';
import Card from './UI/Card';
import Title from './UI/Title';

class Cv extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <Card className='cv-container'>
                <Title text='Test text'/>
            </Card>
        );
    };
};

export default Cv;