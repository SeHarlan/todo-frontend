import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css'

import Header from './Header.js';
import List from './List.js';
import Login from './Login.js'

export default class App extends Component {
  state = {
    currentUser: ''
  }

  
  getUserProp = (user) => {
    this.setState({ currentUser: user})
  }


  render() {
    return (
      <div className='app'>
        <Header email={this.state.currentUser.email} />
        <Router>
          <Switch>
            <Route exact path="/" render={() =>
              this.state.currentUser ? <List currentUser={this.state.currentUser} /> : <Redirect to='/login' />
            } />
            <Route exact path="/login" 
            render={(routerProps) => <Login routerProps={routerProps} currentUser={this.state.currentUser} getUserProp={this.getUserProp} />}
            />

          </Switch>
        </Router>
        
      </div>
    )
  }
}



