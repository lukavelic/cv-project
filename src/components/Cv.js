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
        const onInputClickHandler = (data) => {
            const id = data.id.value;
            const inputType = data['data-type'].value;
            const isDescription = data['data-description'].value;
            console.log(isDescription)

            const defaultSection = {
                title: '',
                text: '',
                titleInEdit: false,
                descriptionInEdit: true,
                id: uniqid(),
            };

            const i = this.state.sections.findIndex((section) => {
                return section.id === id
            });

            if(isDescription === true) {
                if(inputType === 'check') {
                    console.log('check desc')
                    const section = this.state.sections[i]
                    section.descriptionInEdit = false;

                    const newArr = this.state.sections.slice(0, i).concat(this.state.sections.slice(i));

                    this.setState(
                        {
                            sections: newArr,
                            section: defaultSection,
                        }
                    );
                } else {
                    console.log('edit desc')
                    const section = this.state.sections[i]
                    section.descriptionInEdit = true;

                    const newArr = this.state.sections.slice(0, i).concat(this.state.sections.slice(i));

                    this.setState(
                        {
                            sections: newArr,
                            section: defaultSection,
                        }
                    );
                };
            } else {
                if(inputType === 'check') {
                    console.log('check title')
                    const section = this.state.sections[i]
                    section.titleInEdit = false;

                    const newArr = this.state.sections.slice(0, i).concat(this.state.sections.slice(i));

                    this.setState(
                        {
                            sections: newArr,
                            section: defaultSection,
                        }
                    );
                } else if (inputType === 'edit') {
                    console.log('edit title')
                    const section = this.state.sections[i]
                    section.titleInEdit = true;

                    const newArr = this.state.sections.slice(0, i).concat(this.state.sections.slice(i));

                    this.setState(
                        {
                            sections: newArr,
                            section: defaultSection,
                        }
                    );
                } else {
                    const newArr = this.state.sections.slice(0, i).concat(this.state.sections.slice(i+1));

                    this.setState(
                        {
                            sections: newArr,
                            section: defaultSection,
                        }
                    );
                }
            }
        };

        return(
            <Card className='cv-container'>
                {
                    this.state.sections.map((section) => {
                        return (
                            <Section sectionData={section} clickController={onInputClickHandler}/>
                        )
                    })
                }
            </Card>
        );
    };
};

export default Cv;