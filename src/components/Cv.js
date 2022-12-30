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
            0: {
                id: 0,
                type: '(root)',
                childIds: [1,6,8,10]
            },
            1: {
                id: 1,
                type: 'info',
                title: 'Personal Info',
                childIds: [2,3,4,5],
            },
            2: {
                id: 2,
                title: 'Name',
                data: '',
                inEdit: true,
            },
            3: {
                id: 3,
                title: 'Address',
                data: '',
                inEdit: true,
            },
            4: {
                id: 4,
                title: 'E-Mail',
                data: '',
                inEdit: true,
            },
            5: {
                id: 5,
                title: 'Phone Number',
                data: '',
                inEdit: true,
            },
            6: {
                id: 6,
                type: 'experience',
                title: 'Experience',
                childIds: [7],
            },
            7: {
                id: 7,
                company: '',
                position: '',
                dateFrom: '',
                dateTo: '',
                text: '',
                inEdit: true,
            },
            8: {
                id: 8,
                type: 'education',
                title: 'Education',
                childIds: [9],
            },
            9: {
                id: 9,
                school: '',
                course: '',
                dateFrom: '',
                dateTo: '',
                text: '',
                inEdit: true,
            },
            10: {
                id: 10,
                type: 'general',
                title: 'Skills',
                text: 'Various',
                inEdit: true,
            },
        }
    };

    render() {
        const root = this.state[0];
        const sectionIds = root.childIds;
        

        const onButtonClickHandler = (data) => {
            const inputType = data.target.dataset.type
            const parentType = data.target.dataset.parentType
            const sectionId = parseInt(data.target.id);
            const parentId = data.target.dataset.parentId
            console.log(inputType, parentType, sectionId, parentId)

            if(inputType === 'check') {
                const section = {...this.state[sectionId]};
                section.inEdit = false;

                this.setState(
                    {
                        ...this.state,
                        [sectionId]: section,
                    }
                );
            } else if(inputType === 'edit') {
                const section = {...this.state[sectionId]};
                section.inEdit = true;

                this.setState(
                    {
                        ...this.state,
                        [sectionId]: section,
                    }
                );
            } else if(inputType === 'add') {
                const id = Object.keys(this.state).length;
                console.log(id)
                const parentSection = {...this.state[parentId]};
                console.log(parentSection)
                parentSection.childIds.push(id);
                
                if(parentType === 'info') {
                    this.setState({
                        ...this.state,
                        [id]: {
                            id: id,
                            title: '',
                            data: '',
                            inEdit: true,
                        }
                    })
                } else if(parentType === 'experience') {
                    this.setState({
                        ...this.state,
                        [id]: {
                            id: id,
                            company: '',
                            position: '',
                            dateFrom: '',
                            dateTo: '',
                            text: '',
                            inEdit: true,
                        }
                    })
                } else if(parentType === 'education') {
                    this.setState({
                        ...this.state,
                        [id]: {
                            id: id,
                            school: '',
                            course: '',
                            dateFrom: '',
                            dateTo: '',
                            text: '',
                            inEdit: true,
                        }
                    })
                } else {
                    this.setState({
                        ...this.state,
                        [id]: {
                            id: id,
                            type: 'general',
                            title: '',
                            text: '',
                            inEdit: true,
                            childIds: [],
                        }
                    })
                }
                console.log('add')
            } else {
                const stateCopy = {...this.state};
                const filteredChildIds = stateCopy[parentId].childIds.filter(id => id !== sectionId);

                stateCopy[parentId].childIds = filteredChildIds;
                delete stateCopy[sectionId];

                this.setState(stateCopy);
            };
        };

        const onInputChangeHandler = (data) => {
            console.log(data)
            const id = data.target.id;
            const objIndex = parseInt(data.target.dataset.objIndex);

            const stateCopy = {...this.state};

            stateCopy[objIndex] = {
                ...stateCopy[objIndex],
                [id]: data.target.value,
            };

            this.setState(stateCopy);         
        };

        return(
            <Card className='cv-container'>
                {
                    sectionIds.map((sectionId) => {
                        return (
                            <Section key={sectionId} id={sectionId} sectionsById={this.state} actionHandler={onButtonClickHandler} inputHandler={onInputChangeHandler}/>
                        )
                    })
                }
                <AddButton className='add-button' data-type='add' data-parent-type='general' data-parent-id={0} onClick={onButtonClickHandler}/>                
            </Card>
        );
    };
};

export default Cv;