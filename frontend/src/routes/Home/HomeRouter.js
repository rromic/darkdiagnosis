import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* import { restaurantDetailsRenderer } from './RestaurantDetails/restaurantDetailsRenderer'; */
import About from './About/About';
import Diagnoses from './Diagnoses/Diagnoses';
import DiagnosisDetails from './DiagnosisDetails/DiagnosisDetails';

class HomeRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path={'/diagnoses'} component={Diagnoses} />
                <Route path='/diagnoses/:diagnosisId' component={DiagnosisDetails} />
                <Route path={'/about'} component={About} />
                <Redirect to='/about' />      
            </Switch>
        );
    }
}

export {HomeRouter};
