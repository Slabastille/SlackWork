import React from 'react';
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import GetToken from './GetToken';
const Root = () =>{

    return(
        <div>
            <Router>
                <Welcome/>
                <Routes>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/token" component={GetToken} />

                </Routes>
            </Router>
            
            
            
        </div>
    )
}

export default Root