import React from 'react';
import uniqid from "uniqid";
import './Cv.css';
import Card from './UI/Card';
import Section from './UI/Section';

class Cv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'Personal Info',
                    text: '',
                    titleInEdit: false,
                    descriptionInEdit: true,
                    id: uniqid(),
                },
                {
                    title: 'Education',
                    text: '',
                    titleInEdit: false,
                    descriptionInEdit: true,
                    id: uniqid(),
                },
                {
                    title: 'Work Experience',
                    text: 'test',
                    titleInEdit: false,
                    descriptionInEdit: true,
                    id: uniqid(),
                },
                {
                    title: 'Skills',
                    text: '',
                    titleInEdit: false,
                    descriptionInEdit: true,
                    id: uniqid(),
                },
            ],
            section: {
                title: '',
                text: '',
                titleInEdit: false,
                descriptionInEdit: true,
                id: uniqid(),
            },
        }
    };

    render() {
        // const changeSectionHandler = data => {
        //     console.log(data);
        // };

        return(
            <Card className='cv-container'>
                {
                    this.state.sections.map((section) => {
                        return (
                            <Card className='section'>
                                <Section sectionData={section}/>
                            </Card>
                        )
                    })
                }
            </Card>
        );
    };
};

export default Cv;