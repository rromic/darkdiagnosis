import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/Home/Home';
/* import { noRouteRenderer } from './routes/NoRoute/noRouteRenderer'; */

const useStyles = makeStyles({
  '@global': {
    body: {
      margin: '0px',
    },
  },
});

const MainRouter = () => {
  useStyles();

  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* <Route component={noRouteRenderer} /> */}
    </Switch>
  );
};

export default MainRouter;
