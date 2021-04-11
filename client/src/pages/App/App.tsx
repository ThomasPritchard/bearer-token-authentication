import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.scss';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';

type AppState = {
  isLoggedIn: boolean;
}

class App extends Component {
  public state: AppState = {
    isLoggedIn: false,
  }

  public render(): JSX.Element {
    return (
      <Router>
        <div id="app">
          <Switch>
            <Route exact path="/">
              <p>This is a home page that anyone can access</p>
            </Route>
            <Route path="/dashboard">
              {this.state.isLoggedIn ? <Dashboard /> : <Redirect to="/login"></Redirect>}
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
