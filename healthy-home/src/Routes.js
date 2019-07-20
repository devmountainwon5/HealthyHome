// NPM packages
import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Local components
import Calendar from './Views/Calendar/Calendar';
// import Home from './Views/Home/Home';
import Login from './Views/Login/Login/login';
// import Tips from './Views/Tips/Tips';

export default (
    <Switch>
        {/* Replace with proper component={} things later */}
        <Route path="/home" render={()=><div>Home</div>} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/tips" render={()=><div>Tips</div>} />
        <Route path="/" component={Login} />
    </Switch>
);