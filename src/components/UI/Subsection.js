import React from 'react';
import Card from './Card';
import './Subsection.css'

class Subsection extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        if(this.props.type === 'info') {
            if(this.props.inEdit === true) {
                return(
                    <Card className='info-subsection'>
                        {/* <p>{this.props.subsection.title}</p> */}
                        <input type='text' className='subsection-input' defaultValue={this.props.subsection.title ? this.props.subsection.title : ''}/>
                        <input type='text' className='subsection-input' defaultValue={this.props.subsection.data ? this.props.subsection.data : ''}/>
                    </Card>
                )
            } else {
                return(
                    <Card className='info-subsection'>
                    <p>{this.props.subsection.title}</p>
                    <p>{this.props.subsection.data}</p>
                    </Card>
                )
            }
        } else if(this.props.type === 'experience') {
            if(this.props.inEdit === true) {
                return(
                    <Card className='experience-subsection'>
                        <label htmlFor='company'>Company:</label>
                        <input type='text' id='company' className='subsection-input' defaultValue={this.props.subsection.company ? this.props.subsection.company : ''}/>
                        <label htmlFor='title'>Title:</label>
                        <input type='text' id='title' className='subsection-input' defaultValue={this.props.subsection.title ? this.props.subsection.title : ''}/>
                        <label htmlFor='dateFrom'>Date from:</label>
                        <input type='text' id='dateFrom' className='subsection-input' defaultValue={this.props.subsection.dateFrom ? this.props.subsection.dateFrom : ''}/>
                        <label htmlFor='dateTo'>Date to:</label>
                        <input type='text' id='dateTo' className='subsection-input' defaultValue={this.props.subsection.dateTo ? this.props.subsection.dateTo : ''}/>
                        <label htmlFor='description'>Description:</label>
                        <input type='text' id='description' className='subsection-input' defaultValue={this.props.subsection.text ? this.props.subsection.text : ''}/>
                    </Card>
                )
            } else {
                return(
                    <Card className='info-subsection'>
                        <p>{this.props.subsection.company}</p>
                        <p>{this.props.subsection.title}</p>
                        <p>{this.props.subsection.dateFrom}</p>
                        <p>{this.props.subsection.dateTo}</p>
                        <p>{this.props.subsection.text}</p>
                    </Card>
                )
            }
        } else {
            if(this.props.inEdit === true) {
                return(
                    <Card className='education-subsection'>
                        <label htmlFor='school'>School:</label>
                        <input type='text' id='school' className='subsection-input' defaultValue={this.props.subsection.school ? this.props.subsection.school : ''}/>
                        <label htmlFor='title'>Title:</label>
                        <input type='text' id='title' className='subsection-input' defaultValue={this.props.subsection.title ? this.props.subsection.title : ''}/>
                        <label htmlFor='dateFrom'>Date from:</label>
                        <input type='text' id='dateFrom' className='subsection-input' defaultValue={this.props.subsection.dateFrom ? this.props.subsection.dateFrom : ''}/>
                        <label htmlFor='dateTo'>Date to:</label>
                        <input type='text' id='dateTo' className='subsection-input' defaultValue={this.props.subsection.dateTo ? this.props.subsection.dateTo : ''}/>
                        <label htmlFor='description'>Description:</label>
                        <input type='text' id='description' className='subsection-input' defaultValue={this.props.subsection.text ? this.props.subsection.text : ''}/>
                    </Card>
                )
            } else {
                return(
                    <Card className='info-subsection'>
                        <p>{this.props.subsection.school}</p>
                        <p>{this.props.subsection.title}</p>
                        <p>{this.props.subsection.dateFrom}</p>
                        <p>{this.props.subsection.dateTo}</p>
                        <p>{this.props.subsection.text}</p>
                    </Card>
                )
            };
        };
    };
};

export default Subsection;