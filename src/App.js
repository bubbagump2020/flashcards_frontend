import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SplashPage from './components/app/navigation/SplashPage';
import SignUpPage from './components/app/signup/SignUpPage'
import LogInPage from './components/app/login/LogInPage'
import {PrivateRoute} from './components/app/navigation/PrivateRoute'
import './App.scss'
import UserHomePage from './components/user/UserHomePage';
import DecksContainer from './components/deck/DecksContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route exact path="/signup" component={SignUpPage}/>
          <Route exact path="/login" component={LogInPage} />
          <PrivateRoute exact path="/:name" component={UserHomePage} />
          <PrivateRoute exact path="/:name/decks" component={DecksContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
