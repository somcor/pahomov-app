import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          this.props.token.jwt ? (
            <Home/>
          ) : (
            <Redirect to="/login"/>
          )
        )}/>
        <Route path="/login" render={() => (
          this.props.token.jwt ? (
            <Redirect to="/"/>
          ) : (
            <Login/>
          )
        )}/>
      </div>
    );
  }
}

const putStateToProps = (state) => {
  return {
    token: state.token,
  }
}

export default connect(putStateToProps)(App);
