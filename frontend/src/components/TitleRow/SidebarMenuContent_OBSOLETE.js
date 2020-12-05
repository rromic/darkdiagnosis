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
                to='/about'
                exact={true}
                style={{ margin: '1rem 3rem', color: '#FFFFFE', textDecoration: 'none', fontSize: '1.3rem', }}
                activeStyle={{ cursor: 'default', fontWeight: 900, }}
            >
                Main page
            </NavLink>
            <NavLink
                to='/diagnoses'
                exact={true}
                style={{ margin: '1rem 3rem', color: '#FFFFFE', textDecoration: 'none', fontSize: '1.3rem', }}
                activeStyle={{ cursor: 'default', fontWeight: 900, }}
            >
                Diagnoses
            </NavLink>
        </div>
    );
};

export default SidebarMenuContent;