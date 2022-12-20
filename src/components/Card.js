import React from 'react';
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const classes = 'card ' + this.props.className; 

        return (
            <div className={classes}>{this.props.children}</div>
        );
    };
};

export default Card;