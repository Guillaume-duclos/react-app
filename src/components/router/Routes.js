import React from 'react';
import Home from '../../screens/Home';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={Home} />
      </Switch>
    </HashRouter>
  )
};

export default Routes;