import React from 'react';

import Sidebar from 'react-sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

class SidebarMenu extends React.Component {

    state = {
        sidebarOpen: false
    };
    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    /* servicesClickHandler = () => {
        window.scrollTo(0, window);
        this.onSetSidebarOpen(false);
        this.props.servicesClickHandler();
    }

    contactClickHandler = () => {
        window.scrollTo(0, window);
        this.onSetSidebarOpen(false);
        this.props.contactClickHandler();
    } */

    render() {

        const sidebarContent = (
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
                    style={{margin: '1rem 3rem', color: 'white', textDecoration: 'none', fontSize: '1.2rem', }}
                    activeStyle={{cursor: 'default', fontWeight: 'bold',}}
                >
                    Diagnoses
                </NavLink>
                <NavLink 
                    to='/about'
                    exact={true}
                    style={{margin: '1rem 3rem', color: 'white', textDecoration: 'none', fontSize: '1.2rem', }}
                    activeStyle={{cursor: 'default', fontWeight: 'bold',}}
                >
                    About
                </NavLink>
            </div>
        );

        return (
            <>
                <div 
                    onClick={() => this.onSetSidebarOpen(true)}
                    style={{cursor: 'pointer', display: 'flex', marginLeft: '2rem',}}
                >
                    <MenuIcon />
                </div>
                <Sidebar
                    sidebar={sidebarContent}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: 'black', height: '1000px', position: 'fixed',}, root: {height: '0px'} }}
                    pullRight={true}
                >
                    null
                </Sidebar>  
            </>
        );
    }
}

export {SidebarMenu};

