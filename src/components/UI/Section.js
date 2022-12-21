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

        return (
            <Card className='section'>
                <Title text={this.props.sectionData.title} inEdit={this.props.sectionData.titleInEdit} id={this.props.sectionData.id}/>
                <Description text={this.props.sectionData.text} inEdit={this.props.sectionData.descriptionInEdit} id={this.props.sectionData.id}/>
            </Card>
        );
    };
};

export default Section;