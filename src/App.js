import React from 'react';
import { Route, Switch } from 'react-router';
import { IntlProvider } from 'react-intl';

import Home from 'containers/Home';
const App = () => {
  const language = navigator.language;

  return (
    <IntlProvider timeZone="utc" locale={language}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </IntlProvider>
  );
};

export default App;
