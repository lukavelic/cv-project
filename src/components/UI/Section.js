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
        const section = this.props.sectionsById[this.props.id];
        const childIds = section.childIds;


        const actionHandler = (data) => {
            this.props.actionHandler(data);
        }

        const inputHandler = (data) => {
            this.props.inputHandler(data);
        }

        // console.log(this.props)
        // console.log(section)
        // console.log(childIds)

        // return (
        //     <div></div>
        // )

        if(section.type === 'general') {
            if(section.inEdit) {
                return (
                    <Card className='section'>
                        <Card className='title-container'>
                            <input className='input title-input' type='text' id={section.id} placeholder="Please type details here..." onChange={inputHandler} defaultValue={section.title ? section.title  : ''}/>
                            <InputControls type={section.type} inEdit={section.inEdit} id={section.id} parentId={0} actionHandler={actionHandler}/>
                        </Card>
                        <Card className='description-container'>
                            <textarea className="input text-input" id={section.id} placeholder="Please type details here..." onChange={inputHandler} defaultValue={section.text ? section.text : ''}/>
                        </Card>
                    </Card>
                )
            } else {
                return (
                    <Card className='section'>
                        <Card className='title-container'>
                            <p className="text title-text">
                                {section.title}
                            </p>
                            <InputControls type={section.type} inEdit={section.inEdit} id={section.id} parentId={0} actionHandler={actionHandler}/>
                        </Card>
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
                    <p className="text-title">{section.title}</p>
                    {
                        childIds.map((id) => {
                            const subsection = this.props.sectionsById[id];
                            {/* console.log(subsection) */}

                            return (
                                <Card className='subsection' key={subsection.id}>
                                    <Subsection type={section.type} inEdit={subsection.inEdit} subsection={subsection}></Subsection>
                                    <InputControls  type={section.type} inEdit={subsection.inEdit} id={subsection.id} parentId={section.id} actionHandler={actionHandler}/>
                                </Card>
                            )
                        })
                    }
                    <AddButton className='add-button'/>
                </Card>
            )
        }

        // if(this.props.section.type === 'general') {
        //     if(this.props.section.inEdit === true) {
        //         return(
        //             <Card className='section'>
        //                 <Card className='title'>
        //                     <input className='input text' type='text' id={this.props.section.id} placeholder="Please type details here..." onChange={inputHandler} defaultValue={this.props.section.text ? this.props.section.text : ''}/>
        //                     <InputControls type={this.props.section.type} inEdit={this.props.section.inEdit} id={this.props.id} actionHandler={actionHandler}/>
        //                 </Card>
        //                 <Card className='description'>
        //                     <textarea className="input text-area" id={this.props.section.id} placeholder="Please type details here..." onChange={inputHandler} defaultValue={this.props.section.text ? this.props.section.text : ''}/>
        //                 </Card>
        //             </Card>
        //         )
        //     } else {
        //         return(
                    // <Card className='section'>
                    //     <Card className='title'>
                    //         <p className="text-title">
                    //             {this.props.section.text}
                    //         </p>
                    //         <InputControls type={this.props.section.type} inEdit={this.props.section.inEdit} id={this.props.id} actionHandler={actionHandler}/>
                    //     </Card>
                    //     <Card className='description'>
                    //         <p className="text-regular">
                    //             {this.props.section.text}
                    //         </p>
                    //     </Card>
                    // </Card>
        //         );
        //     }; 
        // } else {
        //     return(
                // <Card className='section'>
                //     <p className="text-title">{this.props.section.title}</p>
                //     {
                //         this.props.section.subsections.map((element) => {
                //             return (
                //                 <Card className='subsection' key={element.key}>
                //                     <Subsection type={this.props.section.type} inEdit={element.inEdit} subsection={element}></Subsection>
                //                     <InputControls  type={this.props.section.type} inEdit={element.inEdit} parentId={this.props.section.key} id={element.key} actionHandler={actionHandler}/>
                //                 </Card>
                //             )
                //         })
                //     }
                //     <AddButton className='add-button'/>
                // </Card>
        //     );
        // };
    };
};

export default Section;