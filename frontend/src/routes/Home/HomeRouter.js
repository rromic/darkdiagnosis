import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* import { restaurantDetailsRenderer } from './RestaurantDetails/restaurantDetailsRenderer'; */
import Contact from './Contact/Contact';
import Diagnoses from './Diagnoses/Diagnoses';

class HomeRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path={'/diagnoses'} component={Diagnoses} />
                <Route path='/diagnoses/:diagnosisId' component={() => <div>Single diagnosis</div>} />
                <Route path={'/about'} component={Contact} />
                <Redirect to='/diagnoses' />      
            </Switch>
        );
    }
}

export {HomeRouter};
