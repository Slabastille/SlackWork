import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import GetToken from './GetToken';
import TopThree from './TopThree';
import Navbar from '../Navbar';
import Final from './final';

export const ChannelContext = createContext();

const Root = () => {
  const [channel, setChannel] = useState('');

  return (
    <ChannelContext.Provider value={[channel, setChannel]}>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/token" component={GetToken} />
            <Route exact path="/topThree" component={TopThree} />
            <Route exact path="/final" component={Final} />
          </Switch>
        </Router>
      </div>
    </ChannelContext.Provider>
  );
};

export default Root;
