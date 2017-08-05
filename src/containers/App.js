import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Play from '../components/Play';
import Options from '../components/Options';
import About from '../components/About';
import NotFound from '../components/NotFound';

/** Constant Representing App. */
const App = () => (
  <BrowserRouter>
    {/* Set Up Router */}
    <div className="App">
      <Header />
      <Switch>
        {/* Switch Between Routes */}
        <Route exact path="/" render={ () => <Redirect to="/play" /> } />
        <Route exact path="/play" component={Play} />
        <Route exact path="/options" component={Options} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;