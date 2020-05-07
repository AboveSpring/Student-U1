import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import HomeScreen from './HomeScreen/HomeScreen'
import './App.css'


export default function App() {

  return (

    <Router>
      <Fragment>
        <Switch>
          <Route path="/Home" component={HomeScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </Fragment>
    </Router>
  )
}