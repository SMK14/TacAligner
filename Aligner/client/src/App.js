import logo from './logo.svg';
import './App.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login'
import PrivateRoute from './components/routing/PrivateRoute'
import { Provider } from 'react-redux'
import store from './store'
import MainArea from './components/layouts/MainArea';
import NewUser from './components/Users/NewUser';
import NewDoctor from './components/Users/newDoctor';
import DoctorLogin from './components/auth/DoctorLogin';
import MainMenu from './components/layouts/MainMenu';
import NewPatient from './components/Users/NewPatient';
import ExistingUser from './components/Users/ExistingUser';
import ExistingDoctor from './components/Users/ExistingDoctor';
import { Onboard } from './components/patients/Onboard';
import { Processing } from './components/patients/Processing';
import { Ongoing } from './components/patients/Ongoing';
import { Finished } from './components/patients/Finished';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        {/* <Navbar /> */}
        <Route exact path="/" component={Login} />
        <section className="container">
          {/* <Alert /> */}
          <Switch>
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile/:id" component={Profile} /> */}
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/register-user" component={NewUser} />
            <PrivateRoute exact path="/register-doctor" component={NewDoctor} />
            <PrivateRoute exact path="/doctor-login" component={DoctorLogin} />
            <PrivateRoute exact path="/dashboard" component={MainArea} />
            <PrivateRoute exact path="/doctor-dashboard" component={MainMenu} />
            <PrivateRoute exact path="/register-patient" component={NewPatient} />
            <PrivateRoute exact path="/patients-onboard" component={Onboard} />
            <PrivateRoute exact path="/patients-processing" component={Processing} />
            <PrivateRoute exact path="/patients-ongoing" component={Ongoing} />
            <PrivateRoute exact path="/patients-finished" component={Finished} />
            <PrivateRoute exact path="/users-all" component={ExistingUser} />
            <PrivateRoute exact path="/doctors-all" component={ExistingDoctor} />
            {/* <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/add-experience" component={AddExperience} />
            <PrivateRoute exact path="/add-education" component={AddEducation} />
            <PrivateRoute exact path="/posts" component={Posts} />
            <PrivateRoute exact path="/posts/:id" component={Post} /> */}
          </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
