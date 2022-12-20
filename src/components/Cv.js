import React from 'react';
import uniqid from "uniqid";
import './Cv.css';
import Card from './UI/Card';
import Title from './UI/Title';
import Description from './UI/Description';

class Cv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'Personal Info',
                    text: '',
                    inEdit: true,
                    id: uniqid(),
                },
                {
                    title: 'Education',
                    text: '',
                    inEdit: true,
                    id: uniqid(),
                },
                {
                    title: 'Work Experience',
                    text: 'test',
                    inEdit: false,
                    id: uniqid(),
                },
                {
                    title: 'Skills',
                    text: '',
                    inEdit: true,
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
                                <Description text={section.text} inEdit={section.inEdit}/>
                            </Card>
                        )
                    })
                }
            </Card>
        );
    };
};

export default Cv;