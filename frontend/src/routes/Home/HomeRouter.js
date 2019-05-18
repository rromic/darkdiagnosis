import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* import { restaurantDetailsRenderer } from './RestaurantDetails/restaurantDetailsRenderer'; */
import { ContactContainer } from './Contact/ContactContainer';
import { ServicesContainer } from './Services/ServicesContainer';

class HomeRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path={'/'} component={ServicesContainer} />
                {/* <Route path={'/restaurants/:restaurantName'} component={restaurantDetailsRenderer}/> */}
                <Route path={'/about'} component={ContactContainer} />
            </Switch>
        );
    }
}

export {HomeRouter};
