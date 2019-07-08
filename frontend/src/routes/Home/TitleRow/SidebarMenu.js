import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import Sidebar from 'react-sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarMenuContent from './SidebarMenuContent';

const SidebarMenu = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    /////////hack to trigger sidebare close on route change///////////
    const route = useSelector(state => state.router.location.pathname);
    useEffect(() => {
        setSidebarOpen(false);
    }, [route]);
    /////////////////////////////////////////////////////////////////
    
    return (
        <>
            <div 
                onClick={() => setSidebarOpen(true)}
                style={{cursor: 'pointer', display: 'flex', marginLeft: '2rem',}}
            >
                <MenuIcon />
            </div>
            <Sidebar
                sidebar={<SidebarMenuContent />}
                open={sidebarOpen}
                onSetOpen={setSidebarOpen}
                styles={{ sidebar: { background: 'black', height: '1000px', position: 'fixed',}, root: {height: '0px'} }}
                pullRight={true}
            >
                null
            </Sidebar>  
        </>
    );
};

export default SidebarMenu;

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
