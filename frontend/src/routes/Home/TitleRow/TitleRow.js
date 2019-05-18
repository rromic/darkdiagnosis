import React from 'react';
import { withStyles } from '@material-ui/styles';

import woman from './BeautifulWoman.jpg';
import SpreadMenu from './SpreadMenu';
import { SidebarMenu } from './SidebarMenu';

const styles = {
    titleRow: {
        position: 'fixed',
        top: '0rem',
        //backgroundColor: '#a48500',
        backgroundColor: '#000',
        width: '100%',
        padding: '0rem 1.5rem 0rem 1.5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        /* borderBottom: '1px solid black', */
        color: 'white',
        opacity: '0.95',
        height: '5rem',
        boxSizing: 'border-box',
        zIndex: 100,
    },
    spacer: {
        width: '100%',
        height: '5rem',
        backgroundColor: '#000',
        //backgroundColor: '#a48500',
    }, 
    image: {
        width: '100%',
        maxHeight: '700px',
        overflow: 'hidden',
        textAlign: 'center',
        /* marginTop: '6rem',*/
        marginBottom: '-1rem',
    },
    mdMenu: {
        display: 'none',
    },
    xsMenu: {
    },
    title: {
        fontSize: '1.7rem',
        fontWeight: 'bold'
        //cursor: 'pointer',
    },
    /* '@media (min-width: 600px)': {
        
    }, */
    '@media (min-width: 960px)': {
        titleRow: {
            height: '6rem',
        },
        title: {
            fontSize: '2.3rem',
        },
        spacer: {
            height: '6rem',
        },
        image: {
            marginBottom: '2rem',
        },
        mdMenu: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
            alignItems: 'center'
        },
        xsMenu: {
            display: 'none',
        },
    },
};


class TitleRow extends React.Component {

    render() {
        const {servicesClickHandler, contactClickHandler, logoClickedHandler, classes, currentRoute} = this.props;

        return (
            <>
                <div className={classes.titleRow}>
                    <div
                        /* onClick={logoClickedHandler} */
                        className={classes.title}
                    >
                        Dark Diagnosis
                    </div>

                    <div className={classes.mdMenu}>
                        <SpreadMenu
                            servicesClickHandler={servicesClickHandler}
                            contactClickHandler={contactClickHandler}
                            currentRoute={currentRoute}
                        />
                    </div>

                    <div className={classes.xsMenu}>
                        <SidebarMenu 
                            servicesClickHandler={servicesClickHandler}
                            contactClickHandler={contactClickHandler}
                            currentRoute={currentRoute}
                        />
                    </div>
                </div>

                <div className={classes.spacer} />
                {/* <div className={classes.image}>
                    <img src={woman} style={{width: '100%'}}/> 
                </div> */}
            </>
        );
    }
}

export default withStyles(styles)(TitleRow);

