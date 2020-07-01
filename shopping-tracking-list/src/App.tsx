import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import { MainAppBar } from './components/AppBar/MainAppBar';
import { BoughtPage } from './components/Pages/BoughtPage.tsx/BoughtPage';
import { RecievedPage } from './components/Pages/RecievedPage/RecievedPage';
import { Alerts } from './components/Alerts/Alerts';

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
