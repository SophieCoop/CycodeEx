import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import SubscriptionPage from './components/pages/subscriptionPage';
import SubscriptionIframe from './components/pages/subscriptionIframe';

import './assets/styles/app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/secondaryPage"} component={SubscriptionPage} />
        <Route path={"/iframe"} component={SubscriptionIframe} />
      </Router>
    </div>
  );
}

export default App;
