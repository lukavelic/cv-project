import React from 'react';
import {ReactComponent as AddButton} from '../../assets/plus-circle-multiple.svg'
import './NewSection.css'

class NewSection extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const clickHandler = () => {
            this.props.clickController()
        };

        return (
            <AddButton className='add-button' onClick={clickHandler}/>
        );
    };
};

export default NewSection;