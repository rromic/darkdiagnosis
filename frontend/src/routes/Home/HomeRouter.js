import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* import { restaurantDetailsRenderer } from './RestaurantDetails/restaurantDetailsRenderer'; */
import { ContactContainer } from './Contact/ContactContainer';
import Diagnoses from './Services/Diagnoses';

class HomeRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path={'/diagnoses'} component={Diagnoses} />
                <Route path='diagnoses/:diagnosisId' component={() => <div>Single diagnosis</div>} />
                <Route path={'/about'} component={ContactContainer} />
                <Redirect from='/' to='/diagnoses' />      
            </Switch>
        );
    }
}

export {HomeRouter};
