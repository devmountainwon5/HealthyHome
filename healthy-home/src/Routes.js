// NPM packages
import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Local components
// import Calendar from './Views/Calendar/Calendar';
// import NavBar from './Views/Home/NavBar/NavBar';
import Login from './Views/Login/login';
import Register from './Views/Register/register';
import HomeHealth from './Views/Home/HomeHealth/HomeHealth';
import Tips from './Views/Tips/Tips';
import ToDos from 'Views/ToDos/ToDos';
import Quiz from './Views/Quiz/quiz';
import ErrorPage from './Views/ErrorPage/ErrorPage';
import Profile from 'Views/Profile/Profile';

export default (
    <Switch>
        {/* <NavBar /> */}
        {/* <Route path="/calendar" component={Calendar} /> */}
        {/* Replace with proper component={} things later */}
        <Route path="/profile" component={Profile}/>
        <Route path="/subscribe" component={ToDos} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/homehealth" component={HomeHealth} />
        <Route path="/tips" component={Tips} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route path="/*" component={ErrorPage} />
    </Switch>
);