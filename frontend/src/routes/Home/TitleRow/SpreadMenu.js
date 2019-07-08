import React from 'react';
import { NavLink } from 'react-router-dom';

const basicLinkStyle = {marginLeft: '2rem', fontSize: '1.2rem', color: 'white', textDecoration: 'none',};
const activeLinkStyle = {cursor: 'default', fontWeight: 'bold',};

const SpreadMenu= () => {

/*     servicesClickHandler = () => {
        window.scrollTo(0, window);
        this.props.servicesClickHandler();
    }

    contactClickHandler = () => {
        window.scrollTo(0, window);
        this.props.contactClickHandler();
    } */

    return (
        <>  
            <NavLink 
                to='/diagnoses'
                exact={true}
                style={basicLinkStyle}
                activeStyle={activeLinkStyle}
            >
                Diagnoses
            </NavLink>
        
            <NavLink 
                to='/about'
                exact={true}
                style={basicLinkStyle}
                activeStyle={activeLinkStyle}
            >
                About
            </NavLink>
        </>
    );
};

export default SpreadMenu;

