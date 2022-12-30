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
        const actionHandler = (data) => {
            this.props.actionHandler(data);
        }

        const inputHandler = (data) => {
            this.props.inputHandler(data);
        }

        // console.log(this.props)

        if(this.props.section.type === 'general') {
            if(this.props.section.inEdit === true) {
                return(
                    <Card className='section'>
                        <Card className='title'>
                            <input className='input text' type='text' id={this.props.section.id} placeholder="Please type details here..." onChange={inputHandler} defaultValue={this.props.section.text ? this.props.section.text : ''}/>
                            <InputControls type={this.props.section.type} inEdit={this.props.section.inEdit} id={this.props.id} actionHandler={actionHandler}/>
                        </Card>
                        <Card className='description'>
                            <textarea className="input text-area" id={this.props.section.id} placeholder="Please type details here..." onChange={inputHandler} defaultValue={this.props.section.text ? this.props.section.text : ''}/>
                        </Card>
                    </Card>
                )
            } else {
                return(
                    <Card className='section'>
                        <Card className='title'>
                            <p className="text-title">
                                {this.props.section.text}
                            </p>
                            <InputControls type={this.props.section.type} inEdit={this.props.section.inEdit} id={this.props.id} actionHandler={actionHandler}/>
                        </Card>
                        <Card className='description'>
                            <p className="text-regular">
                                {this.props.section.text}
                            </p>
                        </Card>
                    </Card>
                );
            }; 
        } else {
            return(
                <Card className='section'>
                    <p className="text-title">{this.props.section.title}</p>
                    {
                        this.props.section.subsections.map((element) => {
                            return (
                                <Card className='subsection' key={element.key}>
                                    <Subsection type={this.props.section.type} inEdit={element.inEdit} subsection={element}></Subsection>
                                    <InputControls  type={this.props.section.type} inEdit={element.inEdit} parentId={this.props.section.key} id={element.key} actionHandler={actionHandler}/>
                                </Card>
                            )
                        })
                    }
                    <AddButton className='add-button'/>
                </Card>
            );
        };
    };
};

export default Section;