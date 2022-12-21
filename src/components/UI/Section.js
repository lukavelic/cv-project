import React from 'react';
import './Section.css';
import Card from './Card';
import Title from './Title';
import Description from './Description';

class Section extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const clickController = (data) => {
            this.props.clickController(data);
        }

        const inputController = (data) => {
            this.props.inputController(data);
        }

        return (
            <Card className='section'>
                <Title className='title' text={this.props.sectionData.title} inEdit={this.props.sectionData.titleInEdit} id={this.props.sectionData.id} clickController={clickController} inputController={inputController}/>
                <Description className='description' text={this.props.sectionData.text} inEdit={this.props.sectionData.descriptionInEdit} id={this.props.sectionData.id} clickController={clickController} inputController={inputController}/>
            </Card>
        );
    };
};

export default Section;