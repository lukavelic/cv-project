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
                    <Card className='input'>
                        {/* <p>{this.props.subsection.title}</p> */}
                        {/* <input type='text' id='title' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.title ? this.props.subsection.title : ''}/> */}
                        <label htmlFor='data'>{this.props.subsection.title}: </label>
                        <input type='text' id='data' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.data ? this.props.subsection.data : ''}/>
                    </Card>
                )
            } else {
                return(
                    <Card className='text'>
                    {/* <p id='title'>{this.props.subsection.title}</p> */}
                        <p className='text info' id='data'>{this.props.subsection.data}</p>
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
                        <input type='text' id='position' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.position ? this.props.subsection.position : ''}/>
                        <label htmlFor='dateFrom'>Date from:</label>
                        <input type='text' id='dateFrom' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.dateFrom ? this.props.subsection.dateFrom : ''}/>
                        <label htmlFor='dateTo'>Date to:</label>
                        <input type='text' id='dateTo' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.dateTo ? this.props.subsection.dateTo : ''}/>
                        <label htmlFor='text'>Description:</label>
                        <textarea type='text' id='text' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.text ? this.props.subsection.text : ''}/>
                    </Card>
                )
            } else {
                return(
                    <Card className='experience-subsection'>
                        <div className="text top">
                            <span className='title-medium' id='company'>{this.props.subsection.company}</span><span className='text cursive'>{this.props.subsection.dateFrom} - {this.props.subsection.dateTo}</span>
                        </div>
                        <span className='title-small'>{this.props.subsection.position}</span>
                        <p>{this.props.subsection.text}</p>
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
                        <input type='text' id='title' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.title ? this.props.subsection.title : ''}/>
                        <label htmlFor='dateFrom'>Date from:</label>
                        <input type='text' id='dateFrom' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.dateFrom ? this.props.subsection.dateFrom : ''}/>
                        <label htmlFor='dateTo'>Date to:</label>
                        <input type='text' id='dateTo' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.dateTo ? this.props.subsection.dateTo : ''}/>
                        <label htmlFor='text'>Description:</label>
                        <textarea type='text' id='text' data-obj-index={this.props.id} className='subsection-input' onChange={inputHandler} defaultValue={this.props.subsection.text ? this.props.subsection.text : ''}/>
                    </Card>
                )
            } else {
                return(
                    <Card className='education-subsection'>
                        <div className='text top'>
                            <span className='title-medium'>{this.props.subsection.school}</span><span className='text cursive'>{this.props.subsection.dateFrom} - {this.props.subsection.dateTo}</span>
                        </div>
                        <span className='title-small'>{this.props.subsection.title}</span>
                        <p>{this.props.subsection.text}</p>
                    </Card>
                )
            };
        };
    };
};

export default Subsection;