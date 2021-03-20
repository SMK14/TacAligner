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
      <Route exact path="/officeadmin-login" component={Login} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/dashboard" component={Dashboard} />
      </Fragment>
      </Router>
      </Provider>
  )
}

export default App;
