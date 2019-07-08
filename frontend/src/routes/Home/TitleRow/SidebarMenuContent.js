import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarMenuContent = () => {
    return (
        <div style={{
            width: '170px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '1rem'
        }}>
            <NavLink
                to='/diagnoses'
                exact={true}
                style={{ margin: '1rem 3rem', color: 'white', textDecoration: 'none', fontSize: '1.2rem', }}
                activeStyle={{ cursor: 'default', fontWeight: 'bold', }}
            >
                Diagnoses
            </NavLink>
            <NavLink
                to='/about'
                exact={true}
                style={{ margin: '1rem 3rem', color: 'white', textDecoration: 'none', fontSize: '1.2rem', }}
                activeStyle={{ cursor: 'default', fontWeight: 'bold', }}
            >
                About
            </NavLink>
        </div>
    );
};

export default SidebarMenuContent;