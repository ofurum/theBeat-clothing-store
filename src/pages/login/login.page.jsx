import React from 'react'
import Login from '../../components/LogIn/Login.component'
import { Link } from "react-router-dom";
import './login.page.scss'
const LoginPage = () => {

    return (
      <div className="login-page">
        <h1 className="login-title">
          <Link to="/">theBeat©</Link>
        </h1>

        <Login />
      </div>
    );
}

export default LoginPage;