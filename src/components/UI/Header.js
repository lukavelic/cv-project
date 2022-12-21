import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <header className='header'>CV React Project</header>
        );
    };
};

export default Header;