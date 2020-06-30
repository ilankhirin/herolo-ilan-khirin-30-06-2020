import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainAppBar } from './components/AppBar/MainAppBar';
import { BoughtPage } from './components/Pages/BoughtPage.tsx/BoughtPage';
import { RecievedPage } from './components/Pages/RecievedPage/RecievedPage';

function App() {
  return <Router>
    <MainAppBar />
    <Switch >
      <Route path='/bought'>
        <BoughtPage />
      </Route>
      <Route path={['/', '/recieved']}>
        <RecievedPage />
      </Route>
    </Switch>
  </Router>
}

export default App;
