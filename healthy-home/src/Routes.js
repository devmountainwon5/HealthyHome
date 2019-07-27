// NPM packages
import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Local components
// import Calendar from './Views/Calendar/Calendar';
// import NavBar from './Views/Home/NavBar/NavBar';
import Login from './Views/Login/Login/login';
import Register from './Views/Login/Register/register';
import HomeHealth from './Views/Home/Subviews/HomeHealth/HomeHealth';
import Tips from './Views/Tips/Tips';
// import Quiz from './Views/Login/Quiz/quiz'

export default (
    <Switch>
        {/* <NavBar /> */}
        {/* <Route path="/calendar" component={Calendar} /> */}
        {/* Replace with proper component={} things later */}
        {/* <Route path="/subscribe" component={Todo} /> */}

        {/* <Route path="/quiz" component={Quiz} /> */}
        <Route path="/homehealth" component={HomeHealth} />
        <Route path="/tips" component={Tips} />
        <Route path="/register" component={Register}/>
        <Route exact path="/" component={Login} />
    </Switch>
);