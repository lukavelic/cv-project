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
                childIds: [],
            },
        }

        // this.state = {
        //     sections: [
        //         {
        //             type: 'info',
        //             title: 'Personal Info',
        //             subsections: [
        //                 {
        //                     title: 'Name',
        //                     data: 'test',
        //                     key: uniqid(),
        //                     inEdit: true,
        //                 },
        //                 {
        //                     title: 'Address',
        //                     data: 'test',
        //                     key: uniqid(),
        //                     inEdit: true,
        //                 },
        //                 {
        //                     title: 'E-mail',
        //                     data: 'test',
        //                     key: uniqid(),
        //                     inEdit: true,
        //                 },
        //                 {
        //                     title: 'Mobile no.',
        //                     data: 'test',
        //                     key: uniqid(),
        //                     inEdit: true,
        //                 },
        //             ],
        //             newSubsection: {
        //                 title: 'Info',
        //                 data: '',
        //                 key: uniqid(),
        //                 inEdit: true,
        //             },
        //             key: uniqid(),
        //         },
        //         {
        //             type: 'experience',
        //             title: 'Work Experience',
        //             subsections: [
        //                 {
        //                     company: '',
        //                     title: '',
        //                     dateFrom: '',
        //                     dateTo: '',
        //                     text: '',
        //                     key: uniqid(),
        //                     inEdit: true,
        //                 },
        //             ],
        //             newSubsection: {
        //                 company: '',
        //                 title: '',
        //                 dateFrom: '',
        //                 dateTo: '',
        //                 text: '',
        //                 key: uniqid(),
        //                 inEdit: true,
        //             },
        //             key: uniqid(),
        //         },
        //         {
        //             type: 'education',
        //             title: 'Education',
        //             subsections: [
        //                 {
        //                     school: '',
        //                     title: '',
        //                     dateFrom: '',
        //                     dateTo: '',
        //                     text: '',
        //                     inEdit: true,
        //                     key: uniqid(),
        //                 },
        //             ],
        //             newSubsection: {
        //                 school: '',
        //                 title: '',
        //                 dateFrom: '',
        //                 dateTo: '',
        //                 text: '',
        //                 inEdit: true,
        //                 key: uniqid(),
        //             },
        //             key: uniqid(),
        //         },
        //         {
        //             type: 'general',
        //             title: 'Skills',
        //             text: 'test',
        //             inEdit: false,
        //             key: uniqid(),
        //         },
        //     ],
        // }
    };

    render() {
        const root = this.state[0];
        const sectionIds = root.childIds;

        const newGeneralSection = {
            type: 'general',
            title: 'New Section',
            text: '',
            inEdit: true,
            key: uniqid(),
        };

        const actionHandler = (data) => {
            const id = data.target.id;
            const inputType = data.target.attributes["data-type"].value;
            const parentId = data.target.attributes.getNamedItem('data-parentid').value;
            const parentType = data.target.attributes.getNamedItem('data-parenttype').value

            const parentIndex = this.state.sections.findIndex((section) => {
                return section.key === parentId
            });

            const index = this.state.sections[parentIndex].subsections.findIndex((subsection) => {
                return subsection.key === id
            });

            if(inputType === 'check') {


                // const subsection = this.state.sections[parentIndex].subsections[index]
                // subsection.inEdit = false;

                // console.log(subsection);
                
                // const newArr = this.state.sections
                // newArr[parentIndex].subsections[index] = subsection;

                // console.log(newArr)
                // console.log(this.state)

            } else if(inputType === 'edit') {
                console.log('')
            } else {
                console.log('')
            };

            // // if(isDescription === 'true') {
            //     if(inputType === 'check') {
            //         const section = this.state.sections[i]
            //         section.descriptionInEdit = false;

            //         const newArr = this.state.sections
            //         newArr[i] = section;

            //         this.setState(
            //             {
            //                 sections: newArr,
            //                 section: newGeneralSection,
            //             }
            //         );
            //     } else {
            //         const section = this.state.sections[i]
            //         section.descriptionInEdit = true;

            //         const newArr = this.state.sections
            //         newArr[i] = section;

            //         this.setState(
            //             {
            //                 sections: newArr,
            //                 section: newGeneralSection,
            //             }
            //         );


            //     };
            // // } else {
            //     if(inputType === 'check') {
            //         const section = this.state.sections[i]
            //         section.titleInEdit = false;

            //         const newArr = this.state.sections
            //         newArr[i] = section;

            //         this.setState(
            //             {
            //                 sections: newArr,
            //                 section: newGeneralSection,
            //             }
            //         );
            //     } else if (inputType === 'edit') {
            //         const section = this.state.sections[i]
            //         section.titleInEdit = true;

            //         const newArr = this.state.sections
            //         newArr[i] = section;

            //         this.setState(
            //             {
            //                 sections: newArr,
            //                 section: newGeeralSection,
            //             }
            //         );
            //     } else {
            //         const newArr = this.state.sections.slice(0, i).concat(this.state.sections.slice(i+1));

            //         this.setState(
            //             {
            //                 sections: newArr,
            //                 section: newGeneralSection,
            //             }
            //         );
            //     // }
            // }
        };

        const onInputChangeHandler = (data) => {
            // const id = data.target.id;
            // const isDescription = data.target.attributes['data-description'].value;

            // const i = this.state.sections.findIndex((section) => {
            //     return section.id === id
            // });

            // const section = this.state.sections[i]

            // if(isDescription === 'true') {
            //     section.text = data.target.value;
            // } else {
            //     section.title = data.target.value;
            // }

            // const newArr = this.state.sections;
            // newArr[i] = section;

            // this.setState(
            //     {
            //         sections: newArr,
            //         section: newGeneralSection,
            //     }
            // );
        };

        const addNewSection = () => {
            // const newArr = this.state.sections.concat(newGeneralSection);
            
            // const newSection = {
            //     title: 'New Section',
            //     text: '',
            //     titleInEdit: false,
            //     descriptionInEdit: true,
            //     key: uniqid(),
            // };

            // this.setState({
            //     sections: newArr,
            //     section: newSection,
            // })
        }

        return(
            <Card className='cv-container'>
                {
                    sectionIds.map((sectionId) => {
                        return (
                            <Section key={sectionId} id={sectionId} sectionsById={this.state} actionHandler={actionHandler} inputHandler={onInputChangeHandler}/>
                        )
                    })
                }
                <AddButton className='add-button'/>                
            </Card>
        );
    };
};

export default Cv;