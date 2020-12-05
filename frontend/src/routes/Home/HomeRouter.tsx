import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './About/About';

//import DiagnosisDetails from './DiagnosisDetails/DiagnosisDetails';
const DiagnosisDetails = lazy(() => import('./DiagnosisDetails/DiagnosisDetails'));


const HomeRouter = () => {
  return (
    <Switch>
      <Route path='/diagnoses/:diagnosisId' component={DiagnosisDetails} />
      <Route exact={true} path={'/'} component={About} />
      <Redirect to='/' />
    </Switch>
  );
};

export default HomeRouter;
