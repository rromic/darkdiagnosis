import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/Home/Home';
import TitleRow from './components/TitleRow/TitleRow';
import Login from './routes/Login/Login';
/* import { noRouteRenderer } from './routes/NoRoute/noRouteRenderer'; */

const useStyles = makeStyles({
  '@global': {
    body: {
      margin: '0px',
    },
  },
  outer: {
    /* overflow: 'hidden', */
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    left: '0px',
    right: '0px',
    fontFamily: 'Roboto, sans-serif',
  }
});

const MainRouter = () => {
  const classes = useStyles();

  return (
    <div className={classes.outer} test-id='outer'>
      <TitleRow />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
        {/* <Route component={noRouteRenderer} /> */}
      </Switch>
    </div>
  );
};

export default MainRouter;
