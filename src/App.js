import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import NewPlaces from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './users/pages/Users';

function App() {
  return (
    <Router>
    <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new">
            <NewPlaces />
          </Route>
          <Route path="/:userId/places">
            <UserPlaces />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
