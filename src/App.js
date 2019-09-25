import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Overview from './pages/overview/overview.component';
import Tour from './pages/tour/tour.component';
import Footer from './components/footer/footer.component';

import './App.css';

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route path="/tour" exact component={Tour} />
      <Route path="/" component={Overview} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default App;
