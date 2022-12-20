import React from 'react';
import uniqid from "uniqid";
import './Cv.css';
import Card from './UI/Card';
import Title from './UI/Title';
import Input from './UI/Input';

class Cv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'Personal Info',
                    text: '',
                    id: uniqid(),
                },
                {
                    title: 'Education',
                    text: '',
                    id: uniqid(),
                },
                {
                    title: 'Work Experience',
                    text: '',
                    id: uniqid(),
                },
                {
                    title: 'Skills',
                    text: '',
                    id: uniqid(),
                },
            ],
            section: {
                title: '',
                text: '',
                id: uniqid(),
            },
        }
    };

    render() {
        return(
            <Card className='cv-container'>
                {
                    this.state.sections.map((section) => {
                        return (
                            <Card>
                                <Title text={section.title} id={section.id}/>
                                <Input/>
                            </Card>
                        )
                    })
                }
            </Card>
        );
    };
};

export default Cv;