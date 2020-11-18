import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './About/About';
/* import Diagnoses from './Diagnoses/Diagnoses'; */
import DiagnosisDetails from './DiagnosisDetails/DiagnosisDetails';

const HomeRouter = () => {
  return (
    <Switch>
      {/* <Route exact={true} path={'/diagnoses'} component={Diagnoses} /> */}
      <Route path='/diagnoses/:diagnosisId' component={DiagnosisDetails} />
      <Route exact={true} path={'/'} component={About} />
      <Redirect to='/' />
    </Switch>
  );
};

export default HomeRouter;
