import React, { Component } from 'react';
import {BrowserRouter as Router , Route}  from 'react-router-dom'
import './App.css';
import Navbar from './compnents/layouts/Navbar';
import Footer from './compnents/layouts/Footer';
import Home from './compnents/layouts/Home'
import Login from './compnents/auth/Login';
import Register from './compnents/auth/Register';
import ForgaotPassword from './compnents/auth/ForgaotPassword';
import {Provider} from 'react-redux'
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider  store={store}>

        <Router>
            <div className="App">
            
              <Navbar />
              
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/forgotPassword" component={ForgaotPassword}></Route>
              <Footer/>
              
            </div>
      </Router>

      </Provider>
    
    );
  }
}

export default App;
