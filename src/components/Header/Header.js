import React from 'react';

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const header = (props) => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <Logo />
                <Navigation />   
            </div>
        </header>
    )
}

export default header;