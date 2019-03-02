import React, { Component } from 'react';
import './App.css';
import Home  from './Components/Home';
import  Header  from './Components/Nav';
import About from './Components/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
