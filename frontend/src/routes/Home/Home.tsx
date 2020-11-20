import React, { useEffect, useRef } from 'react';

import TitleRow from './TitleRow/TitleRow';
import HomeRouter from './HomeRouter';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    outer: {
      /* overflow: 'hidden', */
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      left: '0px',
      right: '0px',
      fontFamily: 'Roboto, sans-serif',
    },
    mainContent: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      flexDirection: 'column',
      /* height: 'calc(100vh - 4.3rem)', */
      /* overflow: 'auto', */
    },
    [theme.breakpoints.up('md') /* '@media (min-width: Xpx)' */]: {
      mainContent: {
        /* height: 'calc(100vh - 6rem)', */
      },
    },
  };
});

const Home = () => {
  const classes = useStyles();
  const mainContentRef = useRef<HTMLDivElement>(null);

  let location = useLocation();
  useEffect(() => {
    /* console.log('scroll to top'); */
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [location]);

  /* useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.addEventListener('scroll', function (event: Event) {
        console.log(this.scrollTop);
      });
    }
  }, []); 
  */

  return (
    <div className={classes.outer} test-id="outer">
      <TitleRow />
      <div className={classes.mainContent} ref={mainContentRef}>
        <HomeRouter />
      </div>
      {/* <div style={{width: '100%', backgroundColor: 'black', color: 'white'}}>Footer</div> */}
    </div>
  );
};

export default Home;
