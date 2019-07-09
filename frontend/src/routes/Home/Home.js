import React from 'react';
/* import MediaQuery from 'react-responsive'; */

import TitleRow from './TitleRow/TitleRow';
import { HomeRouter } from './HomeRouter';
//import { CartModalContainer } from './CartModal/CartModalContainer';
/* import { RecentOrderNotificationContainer } from './RecentOrderNotification/RecentOrderNotificationContainer'; */

/* 
const containerWidth = 950;

const containerStyleFullHd = {
    position: 'relative',
    width: containerWidth + 'px',
    minWidth: containerWidth + 'px',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center'
};

const containerStyleHdOverrides = {
    width: (containerWidth * 0.87) + 'px',
    minWidth: (containerWidth * 0.87) + 'px',
    fontSize: '0.87rem',
};

const containerStyleHd = Object.assign({}, containerStyleFullHd, containerStyleHdOverrides);
 */

const Home = () => {
    return (
        <>
            <TitleRow />
            <div style={{
                /* position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center', */
                //backgroundColor: 'whitesmoke'
                display: 'flex',
                alignItems: 'center',
                width: '95%',
                maxWidth: '1270px',
                margin: 'auto',
                marginTop: '1rem',
                flexDirection: 'column',
            }}>
                <HomeRouter />
            </div>
            {/* <div style={{width: '100%', backgroundColor: 'black', color: 'white'}}>Footer</div> */}
        </>
    );
};

export default Home;
