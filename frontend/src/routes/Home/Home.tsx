import React, { useEffect, useRef } from 'react';

import HomeRouter from './HomeRouter';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';

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

  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (document.scrollingElement && history.action === 'PUSH') {
      document.scrollingElement.scrollTop = 0;
    }
  }, [location, history]);


  return (
    <div className={classes.mainContent} ref={mainContentRef}>
      <HomeRouter />
    </div>
  );
};

export default Home;
