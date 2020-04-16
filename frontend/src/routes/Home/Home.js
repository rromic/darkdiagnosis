import React, { useEffect, } from 'react';

import TitleRow from './TitleRow/TitleRow';
import { HomeRouter } from './HomeRouter';
/* import backgroundPattern from './backgroundPattern.jpg'; */
import { makeStyles } from '@material-ui/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => {

    return ({
        outer: {
            /* backgroundImage: `url(${backgroundPattern})`, */
            backgroundSize: '350px',
            minHeight: '100%',
            position: 'absolute',
            width: '100%',
            /* display: 'flex',
            flexDirection: 'column', */
        },
        [theme.breakpoints.up('sm')/* '@media (min-width: 600px)' */]: {
            /* outer: {
                marginTop: '5rem',
            }, */
        },
    });
});

const Home = () => {
    const classes = useStyles();

    let location = useLocation();
    useEffect(() => {
        /* console.log('scroll to top:', document.getElementsByTagName('body')[0]); */
        document.getElementsByTagName('html')[0].scrollTop = 0;
    }, [location]);

    return (
        <div className={classes.outer}>
            <TitleRow />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '95%',
                maxWidth: '1270px',
                margin: 'auto',
                flexDirection: 'column',
            }}>
                <HomeRouter />
            </div>
            {/* <div style={{width: '100%', backgroundColor: 'black', color: 'white'}}>Footer</div> */}
        </div>
    );
};

export default Home;
