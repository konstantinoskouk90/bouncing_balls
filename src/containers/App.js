import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Play from './Play';
import About from './About';
import NotFound from './NotFound';

/*
 * The App function represents the entire game 
 * loading in components depending on the route
 */
const App = () => (
  <BrowserRouter>
    {/* Set Up Router */}
    <div className="App">
      <Header />
      <Switch>
        {/* Switch Between Routes */}
        <Route exact path="/" render={ () => <Redirect to="/play" /> } />
        <Route exact path="/play" component={Play} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;