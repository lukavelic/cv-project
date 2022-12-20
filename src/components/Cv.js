import React from 'react';
import './Cv.css';
import Card from './UI/Card';
import Title from './UI/Title';
import InputControls from './InputControls';

class Cv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: ['Personal Info', 'Education', 'Experience', 'Skills'],
            title: '',
        }
    };

    render() {
        return(
            <Card className='cv-container'>
                {
                    this.state.titles.map((title) => {
                        return (
                            <Card>
                                <Title text={title}/>
                            </Card>
                        )
                    })
                }
            </Card>
        );
    };
};

export default Cv;