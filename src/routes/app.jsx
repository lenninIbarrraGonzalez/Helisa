import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Pokedex from '../components/Pokedex';
import Statistics from '../components/Statistics';

const app = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/statistics" component={Statistics} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default app;
