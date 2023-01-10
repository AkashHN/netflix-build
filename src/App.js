import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  const user =null;
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route>
          {/* <LoginScreen/>
           */}
           <HomeScreen/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
