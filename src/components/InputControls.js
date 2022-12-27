import React from 'react';
import './InputControls.css';
import Card from './UI/Card';
import { ReactComponent as EditButton } from '../assets/pencil.svg';
import { ReactComponent as DeleteButton } from '../assets/close-thick.svg';
import { ReactComponent as CheckButton } from '../assets/check-bold.svg';

class InputControls extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const onClickHandler = (e) => {
            // console.log(this.props)
            this.props.determineClickData(e.target.attributes)

            // if(e.target.attributes["data-type"].value === 'check') {
            //     if(this.props.description) {

            //     } else {

            //     }
            // } else if(e.target.attributes["data-type"].value === 'edit') {
            //     if(this.props.description) {

            //     } else {
                    
            //     }
            // } else {

            // };
        };

        if(this.props.inEdit) {
            return (
                <Card className='button-container'>
                    <CheckButton className='button' data-type='check' type={this.props.type} id={this.props.id} onClick={onClickHandler}/>
                    <DeleteButton className='button' data-type='check' type={this.props.type} id={this.props.id} onClick={onClickHandler}/>
                </Card>
            )
        } else {
            return (
                <Card className='button-container'>
                    <EditButton className='button' data-type='check' type={this.props.type} id={this.props.id} onClick={onClickHandler}/>
                    <DeleteButton className='button' data-type='check' type={this.props.type} id={this.props.id} onClick={onClickHandler}/>
                </Card>
            )
        }

        // if(this.props.description) {
        //     if(this.props.inEdit) {
        //         return (
        //             <Card className='button-container'>
        //                 <CheckButton className='button' data-type='check' data-description={this.props.description} id={this.props.id} onClick={onClickHandler}/>
        //             </Card>
        //         );
        //     } else {
        //         return (
        //             <Card className='button-container'>
        //                 <EditButton className='button' data-type='edit' data-description={this.props.description} id={this.props.id} onClick={onClickHandler}/>
        //             </Card>
        //         ); 
        //     }
            
        // } else {
        //     if(this.props.inEdit) {
        //         return (
        //             <Card className='button-container'>
        //                 <CheckButton className='button' data-type='check' data-description={this.props.description} id={this.props.id} onClick={onClickHandler}/>
        //                 <DeleteButton className='button' data-type='delete' data-description={this.props.description} id={this.props.id} onClick={onClickHandler}/>
        //             </Card>
        //         );
        //     } else {
        //         return (
        //             <Card className='button-container'>
        //                 <EditButton className='button' data-type='edit' data-description={this.props.description} id={this.props.id} onClick={onClickHandler}/>
        //                 <DeleteButton className='button' data-type='delete' data-description={this.props.description} id={this.props.id} onClick={onClickHandler}/>
        //             </Card>
        //         ); 
        //     }
        // }
        
    };
};

export default InputControls;