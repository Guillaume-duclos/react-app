import React from 'react';
import Home from '../../screens/Home';
import Today from "../../screens/Today";
import ThisWeek from "../../screens/ThisWeek";
import { HashRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/"           exact component={Home} />
        <Route path="/Home"       exact component={Home} />
        <Route path="/Today"      exact component={Today} />
        <Route path="/ThisWeek"   exact component={ThisWeek} />
        <Route path="*"           exact component={Home} />
      </Switch>
    </HashRouter>
  )
};

export default Routes;