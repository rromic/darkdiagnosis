import React from 'react';

import Sidebar from 'react-sidebar';
import MenuIcon from '@material-ui/icons/Menu';

class SidebarMenu extends React.Component {

    state = {
        sidebarOpen: false
    };
    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    servicesClickHandler = () => {
        window.scrollTo(0, window);
        this.onSetSidebarOpen(false);
        this.props.servicesClickHandler();
    }

    contactClickHandler = () => {
        window.scrollTo(0, window);
        this.onSetSidebarOpen(false);
        this.props.contactClickHandler();
    }

    render() {
        const {currentRoute,} = this.props;

        const sidebarContent = (
            <div style={{
                width: '170px',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center'
            }}>
                <div 
                    style={{margin: '3rem', cursor: currentRoute === '/diagnoses' ? 'default' : 'pointer', fontWeight: currentRoute === '/diagnoses' && 'bold',}}
                    onClick={this.contactClickHandler}
                >
                    Diagnoses
                </div>
                <div 
                    style={{margin: '3rem', cursor: currentRoute === '/about' ? 'default' : 'pointer', fontWeight: currentRoute === '/about' && 'bold',}}
                    onClick={this.servicesClickHandler}
                >
                    About
                </div>
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

