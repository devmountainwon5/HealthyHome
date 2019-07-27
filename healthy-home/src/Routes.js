// NPM packages
import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Local components
import Home from './Views/Home/Home';
import Calendar from './Views/Calendar/Calendar';
import Login from './Views/Login/Login/login';
import Register from './Views/Login/Register/register';
import Homehealth from './Views/Home/Subviews/HomeHealth/HomeHealth'
// import Tips from './Views/Tips/Tips';

export default (
    <Switch>
        {/* <NavBar /> */}
        {/* Replace with proper component={} things later */}
<<<<<<< HEAD
        <Route path="/home" component={Home} />
        <Route path="/homehealth" component={HomeHealth} />
=======
        <Route path="/loggedin" component={Homehealth} />
        <Route path="/home" component={Home} />
>>>>>>> 342f23994edb42697874e2b06966c1f0f68a7c08
        <Route path="/calendar" component={Calendar} />
        <Route path="/tips" render={()=><div>Tips</div>} />
        <Route path="/register" component={Register}/>
        <Route exact path="/" component={Login} />
    </Switch>
);