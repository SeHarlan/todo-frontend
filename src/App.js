import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css'

import Header from './Header.js';
import List from './List.js';
import Login from './Login.js'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Router>
          <Switch>
            <Route path="/todos" component={List} />
            <Route path="/" component={Login} />

          </Switch>
        </Router>
        
      </div>
    )
  }
}



