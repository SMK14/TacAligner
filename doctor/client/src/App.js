import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Login from './components/Login';
import { Dashboard } from './components/Dashboard';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { loadCad } from './actions/cad';
import { ForgotPassword } from './components/ForgotPassword';
import CreatePatient from './components/CreatePatient';
import { Landing } from './components/Landing'
import { AlignerStatus } from './components/AlignerStatus'
import { FinishedInfo } from './components/FinishedInfo'
import { Profile } from './components/Profile';
import { TacMember } from './components/TacMember';
import { TacPlan } from './components/TacPlan';
import { TacSubmitComments } from './components/TacSubmitComments';
import { TacUpload } from './components/TacUpload';
import { PatientOnboard } from './components/PatientOnboard';
import { ProcessingStatus } from './components/ProcessingStatus';
import { ProcessingForms } from './components/ProcessingForms';
import { Starter } from './components/Starter';
import { OngoingInfo } from './components/OngoingInfo';
import { OngoingProcess } from './components/OngoingProcess';
import { FinishedProcess } from './components/FinishedProcess';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {

  useEffect(() => {
    store.dispatch(loadCad())
  }, []);

  return (
    <Provider store={store}> 
    <Router>
      <Fragment>
      <Route exact path="/" component={ Landing } />
      <Route exact path="/aligner-status" component={AlignerStatus} />
      <Route exact path="/finished-info" component={FinishedInfo} />
      <Route exact path="/finished-process" component={FinishedProcess} />
      <Route exact path="/ongoing-info" component={OngoingInfo} />
      <Route exact path="/ongoing-process" component={OngoingProcess} />
      <Route exact path="/starter" component={Starter} />
      <Route exact path="/patient-onboard" component={PatientOnboard} />
      <Route exact path="/processing-status" component={ProcessingStatus} />
      <Route exact path="/processing-forms" component={ProcessingForms} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/tacmember" component={TacMember} />
      <Route exact path="/tacplan" component={TacPlan} />
      <Route exact path="/tacsubmitcomments" component={TacSubmitComments} />
      <Route exact path="/tacupload" component={TacUpload} />
      <Route exact path="/doctor-login" component={Login} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/add-patient" component={CreatePatient} />
      </Fragment>
      </Router>
      </Provider>
  )
}

export default App;
