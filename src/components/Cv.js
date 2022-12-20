import React from 'react';
import './Cv.css';
import Card from './UI/Card';

class Cv extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <Card className='cv-container'>
            CV
            </Card>
        );
    };
};

export default Cv;