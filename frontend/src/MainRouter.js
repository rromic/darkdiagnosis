import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchRelative } from 'Modules/utils.js';
import Home from './routes/Home/Home';
/* import { noRouteRenderer } from './routes/NoRoute/noRouteRenderer'; */

const MainRouter = () => {

  useEffect(() => {
    fetchRelative('data');
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* <Route component={noRouteRenderer} /> */}
    </Switch>
  );
};

export default MainRouter;
