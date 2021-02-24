import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pokedex from '../components/Pokedex';
import Statistics from '../components/Statistics';

const app = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Pokedex} />
      <Route exact path="/statistics" component={Statistics} />
    </Switch>
  </BrowserRouter>
);

export default app;
