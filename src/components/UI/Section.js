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
            <Card>
                <Title text={this.props.sectionData.title} id={this.props.sectionData.id}/>
                <Description text={this.props.sectionData.text} inEdit={this.props.sectionData.inEdit}/>
            </Card>
        );
    };
};

export default Section;