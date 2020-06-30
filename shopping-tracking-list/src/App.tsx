import React from 'react';
import { MainAppBar } from './components/AppBar/MainAppBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecievedPage } from './components/Pages/RecievedPage/RecievedPage';
import { BoughtPage } from './components/Pages/BoughtPage.tsx/BoughtPage';
import { Provider } from 'react-redux'
import { store } from './store/store';

function App() {
  return <Provider store={store}>
    <Router>
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
  </Provider>
}

export default App;
