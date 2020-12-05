import React, { useEffect, useRef } from 'react';

import HomeRouter from './HomeRouter';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
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
    <div className={classes.mainContent} ref={mainContentRef}>
      <HomeRouter />
    </div>
  );
};

export default Home;
