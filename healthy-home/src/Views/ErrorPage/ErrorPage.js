import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar';

import './ErrorPage.css';

function ErrorPage() {

    return (
        <div className="ErrorPage">
            <NavBar />
            <div className="error-center">
                <div className="error-box">
                    <h1>404, page not found</h1>
                    <p>Sorry, we can't find the page you are looking for</p>
                    {/* <Link to="/">Go the the login page</Link>
                    <Link to="/home">Go to the dashboard</Link> */}
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;