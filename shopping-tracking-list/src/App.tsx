import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Alerts } from './components/Alerts/Alerts';
import { MainAppBar } from './components/AppBar/MainAppBar';
import { BoughtPage } from './components/Pages/BoughtPage.tsx/BoughtPage';
import { RecievedPage } from './components/Pages/RecievedPage/RecievedPage';

function App() {
  return <HashRouter>
    <MainAppBar />
    <Alerts />
    <Switch >
      <Route path='/recieved'>
        <RecievedPage />
      </Route>
      <Route path={['/', '/bought']}>
        <BoughtPage />
      </Route>
    </Switch>
  </HashRouter>
}

export default App;
