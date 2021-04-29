import React from 'react';
import SignUp from '../../components/Signup/signUp.component'
import './signup.page.scss';
import { Link } from "react-router-dom";


const SignupPage = () => {

    return (
      <div className="signup-page">
        <h1 className="signup-title">
          <Link to="/">theBeat©</Link>
        </h1>

        <SignUp />
      </div>
    );
};

export default SignupPage