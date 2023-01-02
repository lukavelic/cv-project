import React from 'react';
import './Section.css';
import Card from './Card';
import InputControls from '../InputControls';
import Subsection from './Subsection';
import {ReactComponent as AddButton} from '../../assets/plus-circle-multiple.svg'

class Section extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const sectionId = this.props.id;
        const section = this.props.sectionsById[sectionId];
        const childIds = section.childIds;

        const actionHandler = (data) => {
            this.props.actionHandler(data);
        }

        const inputHandler = (data) => {
            this.props.inputHandler(data);
        };

        if(section.type === 'general') {
            if(section.inEdit) {
                return (
                    <Card className='section'>
                        <Card className='title-container'>
                            <input className='input title-input' type='text' id='title' data-obj-type='general' data-obj-index={section.id} placeholder="Please type details here..." onChange={inputHandler} defaultValue={section.title ? section.title  : ''}/>
                            <InputControls type={section.type} inEdit={section.inEdit} id={section.id} parentId={0} actionHandler={actionHandler}/>
                        </Card>
                        <Card className='description-container'>
                            <textarea className="input text-input" id='text' data-obj-type='general' data-obj-index={section.id} placeholder="Please type details here..." onChange={inputHandler} defaultValue={section.text ? section.text : ''}/>
                        </Card>
                    </Card>
                )
            } else {
                return (
                    <Card className='section'>
                        <Card className='title-container'>
                            <div className='spacing-middle'></div>
                            <p className="text title-large spacing-medium">
                                {section.title}
                            </p>
                            <InputControls type={section.type} inEdit={section.inEdit} id={section.id} parentId={0} actionHandler={actionHandler}/>
                        </Card>
                        <hr class="rounded"></hr>
                        <Card className='description-container'>
                            <p className="text regular-text">
                                {section.text}
                            </p>
                        </Card>
                    </Card>
                )
            }
        } else {
            return (
                <Card className='section'>
                    <p className="title-large">{section.title}</p>
                    <hr class="rounded"></hr>
                    {
                        childIds.map((id) => {
                            const subsection = this.props.sectionsById[id];
                            return (
                                <Card className='subsection-container' key={subsection.id}>
                                    {/* <div className='spacing'></div> */}
                                    <Subsection type={section.type} inEdit={subsection.inEdit} id={subsection.id} subsection={subsection} inputHandler={inputHandler}></Subsection>
                                    <InputControls  type={section.type} inEdit={subsection.inEdit} id={subsection.id} parentId={section.id} actionHandler={actionHandler}/>
                                </Card>
                            )
                        })
                    }
                    <AddButton className='add-button' data-type='add' data-parent-type={section.type} data-parent-id={section.id} onClick={actionHandler}/>
                </Card>
            )
        };
    };
};

export default Section;