import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { fetchRelative } from 'modules/utils';
import Home from './routes/Home/Home';
import { useDispatch } from 'react-redux';
/* import { noRouteRenderer } from './routes/NoRoute/noRouteRenderer'; */

const MainRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRelative('data').then(data => {
      dispatch({ type: 'diagnosesData/loaded', data });
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route component={noRouteRenderer} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
