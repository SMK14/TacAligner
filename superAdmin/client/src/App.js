import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Fragment, useEffect } from 'react';
import { AlignerStatus } from './components/AlignerStatus';
import { AlignerReady } from './components/AlignerReady';
import { DoctorExisting } from './components/DoctorExisting';
import DoctorNew from './components/DoctorNew';
import { Landing } from './components/Landing';
import Login from './components/Login';
import { Starter } from './components/Starter';
import { Profile } from './components/Profile';
import { TacMember } from './components/TacMember';
import { TacPlan } from './components/TacPlan';
import { TacSubmitComments } from './components/TacSubmitComments';
import { TacUpload } from './components/TacUpload';
import { UserExisting } from './components/UserExisting';
import  UserNew  from './components/UserNew';

import { Provider } from 'react-redux';
import store from './store'
import Alert from './components/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import CadLogin from './components/CadLogin';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <Provider store={store}> 
    <Router>
      <Fragment>
        <Alert />
      <Route exact path="/" component={Landing} />
      <Route exact path="/aligner-status" component={AlignerStatus} />
      <Route exact path="/aligner-ready" component={AlignerReady} />
      <Route exact path="/doctor-existing" component={DoctorExisting} />
      <Route exact path="/doctor-new" component={DoctorNew} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/starter" component={Starter} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/tacmember" component={TacMember} />
      <Route exact path="/tacplan" component={TacPlan} />
      <Route exact path="/tacsubmitcomments" component={TacSubmitComments} />
      <Route exact path="/tacupload" component={TacUpload} />
      <Route exact path="/user-existing" component={UserExisting} />
      <Route exact path="/user-new" component={UserNew} />
      <Route exact path="/cad-login" component={CadLogin} />
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
