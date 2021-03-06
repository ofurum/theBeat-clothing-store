import React, { useState } from "react";
import FormInput from "../Form/form.component";
import CustomButton from "../CustomButton/customButton.component";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import "./signUp.styles.scss";
import { setSignup } from "../../redux/user/user.action";

const signUpUserData = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
};

const SignUp = ({ setSignup }) => {
  const [newUser, setNewUser] = useState(signUpUserData);
  const [errorMessage, setErrrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log(mapDispatchToProps)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrrorMessage(false);
    setSuccessMessage(false);
    setIsSubmitting(true);
    const xTag = localStorage.getItem("x-tag");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-tag", xTag);

    var raw = JSON.stringify(newUser);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://masters-prj.herokuapp.com/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setIsSubmitting(false);
        if (result.status === "success") {
          setSuccessMessage("your account was created succesfully");
            setSignup(result.data)
          console.log(result);
        } else if (result.status === "error") {
          setErrrorMessage(
            "There was an error with your registration. Please try registering again."
          );
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser((user) => ({ ...user, [name]: value }));
  };
  const { username, email, password, firstName, lastName, address } = newUser;
  return (
    <div className="sign-up animate__animated animate__fadeInUp">
      <p className="signup-greeting">Hello,</p>
      <span className="signup-message">
        Welcome to theBeat clothing store, Let's get you started by creating
        your account
      </span>
      {errorMessage && <p className="error alert">{errorMessage}</p>}
      {successMessage && <p className="success alert ">{successMessage}</p>}
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
        <FormInput
          type="text"
          value={address}
          name="address"
          handleChange={handleChange}
          label="Home Address"
          required
        />
        <div className="sign-up-button">
          <CustomButton>
            Sign Up
            {isSubmitting && (
              <img
                className="img"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/_2npUSCf6mV.gif"
                alt=""
                width="16"
                height="11"
              />
            )}
          </CustomButton>
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


const mapDispatchToProps = (dispatch) => {
  return {
    setSignup: (data) => dispatch(setSignup(data))
  }
}
export default connect (null,{ setSignup })(SignUp);
