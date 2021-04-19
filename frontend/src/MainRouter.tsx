import { makeStyles } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/Home/Home';
import TitleRow from './components/TitleRow/TitleRow';
import SpinnerLoading from './components/Loading/SpinnerLoading';
/* import { noRouteRenderer } from './routes/NoRoute/noRouteRenderer'; */

const Admin = lazy(() => import('./routes/Admin/Admin'));


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
      <Suspense fallback={<SpinnerLoading />}>
        <Switch>
          <Route path='/admin' component={Admin} /> 
          <Route path='/' component={Home} />
          {/* <Route component={noRouteRenderer} /> */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default MainRouter;
