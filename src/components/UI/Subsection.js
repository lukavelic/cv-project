import React from 'react';
import Card from './Card';
import './Subsection.css'

class Subsection extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const inputHandler = (e) => {
            this.props.inputHandler(e)
        }

        console.log(this.props.id)

        if(this.props.type === 'info') {
            if(this.props.inEdit === true) {
                return(
                    <Card className='info-subsection'>
                        {/* <p>{this.props.subsection.title}</p> */}
                        <input type='text' id='title' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.title ? this.props.subsection.title : ''}/>
                        <input type='text' id='data' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.data ? this.props.subsection.data : ''}/>
                    </Card>
                )
            } else {
                return(
                    <Card className='info-subsection'>
                    <p id='title'>{this.props.subsection.title}</p>
                    <p id='data'>{this.props.subsection.data}</p>
                    </Card>
                )
            }
        } else if(this.props.type === 'experience') {
            if(this.props.inEdit === true) {
                return(
                    <Card className='experience-subsection'>
                        <label htmlFor='company'>Company:</label>
                        <input type='text' id='company' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.company ? this.props.subsection.company : ''}/>
                        <label htmlFor='title'>Title:</label>
                        <input type='text' id='position' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.title ? this.props.subsection.title : ''}/>
                        <label htmlFor='dateFrom'>Date from:</label>
                        <input type='text' id='dateFrom' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.dateFrom ? this.props.subsection.dateFrom : ''}/>
                        <label htmlFor='dateTo'>Date to:</label>
                        <input type='text' id='dateTo' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.dateTo ? this.props.subsection.dateTo : ''}/>
                        <label htmlFor='description'>Description:</label>
                        <input type='text' id='description' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.text ? this.props.subsection.text : ''}/>
                    </Card>
                )
            } else {
                return(
                    <Card className='info-subsection'>
                        <span id='company'>Company: </span><span>{this.props.subsection.company}</span>
                        <span id='position'>Title: </span><span>{this.props.subsection.posiiton}</span>
                        <span id='dateFrom'>From: </span><span>{this.props.subsection.dateFrom}</span>
                        <span id='dateTo'>To: </span><span>{this.props.subsection.dateTo}</span>
                        <span id='description'>Description: </span><span>{this.props.subsection.text}</span>
                    </Card>
                )
            }
        } else {
            if(this.props.inEdit === true) {
                return(
                    <Card className='education-subsection'>
                        <label htmlFor='school'>School:</label>
                        <input type='text' id='school' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.school ? this.props.subsection.school : ''}/>
                        <label htmlFor='title'>Title:</label>
                        <input type='text' id='course' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.title ? this.props.subsection.title : ''}/>
                        <label htmlFor='dateFrom'>Date from:</label>
                        <input type='text' id='dateFrom' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.dateFrom ? this.props.subsection.dateFrom : ''}/>
                        <label htmlFor='dateTo'>Date to:</label>
                        <input type='text' id='dateTo' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.dateTo ? this.props.subsection.dateTo : ''}/>
                        <label htmlFor='text'>Description:</label>
                        <input type='text' id='text' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.text ? this.props.subsection.text : ''}/>
                    </Card>
                )
            } else {
                return(
                    <Card className='info-subsection'>
                        <span id='school'>School: </span><span>{this.props.subsection.school}</span>
                        <span id='course'>Title: </span><span>{this.props.subsection.title}</span>
                        <span id='dateFrom'>From: </span><span>{this.props.subsection.dateFrom}</span>
                        <span id='dateTo'>To: </span><span>{this.props.subsection.dateTo}</span>
                        <span id='text'>Summary: </span><span>{this.props.subsection.text}</span>
                    </Card>
                )
            };
        };
    };
};

export default Subsection;