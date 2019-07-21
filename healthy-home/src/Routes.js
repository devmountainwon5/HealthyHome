// NPM packages
import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Local components
import Home from './Views/Home/Home';
import Calendar from './Views/Calendar/Calendar';
import Login from './Views/Login/Login/login';
import Quiz from './Views/Login/Quiz/quiz';
// import Tips from './Views/Tips/Tips';

export default (
    <Switch>
        {/* Replace with proper component={} things later */}
        <Route path="/home" component={Home} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/tips" render={()=><div>Tips</div>} />
        <Route path="/" component={Login} />
        <Route path="/register" component={Quiz}/>
    </Switch>
);