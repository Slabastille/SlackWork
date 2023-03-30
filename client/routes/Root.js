import React, {createContext, useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import GetToken from './GetToken';
import TopThree from './TopThree';

export const ChannelContext = createContext()


const Root = () =>{
    const [channel, setChannel] = useState('');

    return(
            <ChannelContext.Provider value={[channel, setChannel]}>
               <div>
            <Router>
                <h1> HIIII</h1>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/token" component={GetToken} />
                    <Route exact path="/topThree" component={TopThree} />
                </Switch>
            </Router>
                </div> 
            </ChannelContext.Provider>    
    )
}

export default Root