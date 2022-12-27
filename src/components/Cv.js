import React from 'react';
import uniqid from "uniqid";
import './Cv.css';
import Card from './UI/Card';
import Section from '../components/UI/Section'
import {ReactComponent as AddButton} from '../assets/plus-circle-multiple.svg'

class Cv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    type: 'info',
                    title: 'Personal Info',
                    subsections: [
                        {
                            title: 'Name',
                            data: 'test',
                            id: uniqid(),
                        },
                        {
                            title: 'Address',
                            data: 'test',
                            id: uniqid(),
                        },
                        {
                            title: 'E-mail',
                            data: 'test',
                            id: uniqid(),
                        },
                        {
                            title: 'Mobile no.',
                            data: 'test',
                            id: uniqid(),
                        },
                    ],
                    newSubsection: {
                        title: 'Info',
                        data: '',
                        id: uniqid(),
                    },
                    inEdit: true,
                    id: uniqid(),
                },
                {
                    type: 'experience',
                    title: 'Work Experience',
                    subsections: [
                        {
                            company: '',
                            title: '',
                            dateFrom: '',
                            dateTo: '',
                            text: '',
                            id: uniqid(),
                        },
                    ],
                    newSubsection: {
                        company: '',
                        title: '',
                        dateFrom: '',
                        dateTo: '',
                        text: '',
                        id: uniqid(),
                    },
                    inEdit: true,
                    id: uniqid(),
                },
                {
                    type: 'education',
                    title: 'Education',
                    subsections: [
                        {
                            school: '',
                            title: '',
                            dateFrom: '',
                            dateTo: '',
                            text: '',
                            id: uniqid(),
                        },
                    ],
                    newSubsection: {
                        school: '',
                        title: '',
                        dateFrom: '',
                        dateTo: '',
                        text: '',
                        id: uniqid(),
                    },
                    inEdit: true,
                    id: uniqid(),
                },
                {
                    type: 'general',
                    title: 'Skills',
                    text: 'test',
                    inEdit: false,
                    id: uniqid(),
                },
            ],
        }
    };

    render() {
        const newGeneralSection = {
            type: 'general',
            title: 'New Section',
            text: '',
            inEdit: true,
            id: uniqid(),
        };

        const onInputClickHandler = (data) => {
            const id = data.id.value;
            const inputType = data['data-type'].value;
            const isDescription = data['data-description'].value;

            const i = this.state.sections.findIndex((section) => {
                return section.id === id
            });

            if(isDescription === 'true') {
                if(inputType === 'check') {
                    const section = this.state.sections[i]
                    section.descriptionInEdit = false;

                    const newArr = this.state.sections
                    newArr[i] = section;

                    this.setState(
                        {
                            sections: newArr,
                            section: newGeneralSection,
                        }
                    );
                } else {
                    const section = this.state.sections[i]
                    section.descriptionInEdit = true;

                    const newArr = this.state.sections
                    newArr[i] = section;

                    this.setState(
                        {
                            sections: newArr,
                            section: newGeneralSection,
                        }
                    );


                };
            } else {
                if(inputType === 'check') {
                    const section = this.state.sections[i]
                    section.titleInEdit = false;

                    const newArr = this.state.sections
                    newArr[i] = section;

                    this.setState(
                        {
                            sections: newArr,
                            section: newGeneralSection,
                        }
                    );
                } else if (inputType === 'edit') {
                    const section = this.state.sections[i]
                    section.titleInEdit = true;

                    const newArr = this.state.sections
                    newArr[i] = section;

                    this.setState(
                        {
                            sections: newArr,
                            section: newGeneralSection,
                        }
                    );
                } else {
                    const newArr = this.state.sections.slice(0, i).concat(this.state.sections.slice(i+1));

                    this.setState(
                        {
                            sections: newArr,
                            section: newGeneralSection,
                        }
                    );
                }
            }
        };

        const onInputChangeHandler = (data) => {
            const id = data.target.id;
            const isDescription = data.target.attributes['data-description'].value;

            const i = this.state.sections.findIndex((section) => {
                return section.id === id
            });

            const section = this.state.sections[i]

            if(isDescription === 'true') {
                section.text = data.target.value;
            } else {
                section.title = data.target.value;
            }

            const newArr = this.state.sections;
            newArr[i] = section;

            this.setState(
                {
                    sections: newArr,
                    section: newGeneralSection,
                }
            );
        };

        const addNewSection = () => {
            const newArr = this.state.sections.concat(newGeneralSection);
            
            const newSection = {
                title: 'New Section',
                text: '',
                titleInEdit: false,
                descriptionInEdit: true,
                id: uniqid(),
            };

            this.setState({
                sections: newArr,
                section: newSection,
            })
        }

        return(
            <Card className='cv-container'>
                {
                    this.state.sections.map((section) => {
                        return (
                            <Section section={section} clickController={onInputClickHandler} inputController={onInputChangeHandler}/>
                        )
                    })
                }
                <AddButton className='add-button'/>                
            </Card>
        );
    };
};

export default Cv;