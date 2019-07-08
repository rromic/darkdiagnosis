import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Home } from './routes/Home/Home';
/* import { noRouteRenderer } from './routes/NoRoute/noRouteRenderer'; */

class MainRouter extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/" component={Home} />
                {/* <Route component={noRouteRenderer} /> */}
            </Switch>
        );
    }
}

export default (MainRouter);
