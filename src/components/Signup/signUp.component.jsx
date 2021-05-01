import React,{useState, useEffect} from 'react';
import FormInput from '../Form/form.component'
import CustomButton from '../CustomButton/customButton.component'
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {signedUser} from '../../redux/user/user.action';
import {signUpUserData} from '../../redux/user/user.selector'
import './signUp.styles.scss';

const SignUp = ({ signUpUserData, signedUser }) => {
  const [newUser, setNewUser] = useState(signUpUserData);
  console.log({ newUser });
  const [isSubmitting, setIsSubmitting] = useState(false);

   useEffect(() => {
     const user = signedUser();
      console.log(user)
   }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(false);
    console.log("submitted");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser((user) => ({ ...user, [name]: value }));
  };
  const { username, email, password, firstName, lastName } = newUser;
  return (
    <div className="sign-up">
      <p className="signup-greeting">Hello,</p>
      <span className="signup-message">
        Welcome to theBeat clothing store, Let's get you started by creating
        your account
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={username}
          name="username"
          handleChange={handleChange}
          label="Username"
          required
        />
        <FormInput
          type="text"
          value={firstName}
          name="firstName"
          handleChange={handleChange}
          label="Firstname"
          required
        />
        <FormInput
          type="text"
          value={lastName}
          name="lastName"
          handleChange={handleChange}
          label="Lastname"
          required
        />
        <FormInput
          type="email"
          value={email}
          name="email"
          handleChange={handleChange}
          label="Email"
          width="25"
          required
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="sign-up-button">
          <CustomButton>Sign Up</CustomButton>
        </div>
      </form>
      <div className="have_account">
        Have an account?
        <span className="login-link">
          <Link to="/logIn">Log In</Link>
        </span>
      </div>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  signUpUserData: signUpUserData,
});
export default connect(mapStateToProps, { signedUser })(SignUp);