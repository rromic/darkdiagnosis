import React, { useEffect } from 'react';

import TitleRow from './TitleRow/TitleRow';
import HomeRouter from './HomeRouter';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    outer: {
      overflow: 'hidden',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      fontFamily: 'Roboto, sans-serif',
    },
    mainContent: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      flexDirection: 'column',
      height: 'calc(100vh - 4.3rem)',
      overflow: 'auto',
    },
    [theme.breakpoints.up('md') /* '@media (min-width: Xpx)' */]: {
      mainContent: {
        height: 'calc(100vh - 6rem)',
      },
    },
  };
});

const Home = () => {
  const classes = useStyles();

  let location = useLocation();
  useEffect(() => {
    /* console.log('scroll to top:', document.getElementsByTagName('body')[0]); */
    document.getElementsByTagName('html')[0].scrollTop = 0;
  }, [location]);

  return (
    <div className={classes.outer} test-id="outer">
      <TitleRow />
      <div className={classes.mainContent}>
        <HomeRouter />
      </div>
      {/* <div style={{width: '100%', backgroundColor: 'black', color: 'white'}}>Footer</div> */}
    </div>
  );
};

export default Home;
