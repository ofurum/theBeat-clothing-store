import React,{useState} from 'react';
import FormInput from '../Form/form.component';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { setSignup } from "../../redux/user/user.action";
import CustomButton from '../CustomButton/customButton.component'
import './LogIn.styles.scss';


const Login = ({setSignup}) => {
const initialState ={
    email: '',
    password: '',
}

const [userDetails, setUserDetails] = useState(initialState);
const [isSubmitting,setIsSubmitting] = useState(false)
const [errorMessage,setErrrorMessage] = useState(false)
const [successMessage, setSuccessMessage] = useState(false)

const handleChange = (e) => {
    const {name, value}= e.target
    setUserDetails(deatils =>({...deatils, [name]: value}))
}

const handleSubmit = (e) => {
  e.preventDefault()
  setErrrorMessage(false)
  setIsSubmitting(true)
  setSuccessMessage(false)
  const xTag = localStorage.getItem("x-tag")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-tag", xTag);

    var raw = JSON.stringify(userDetails);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://masters-prj.herokuapp.com/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        setIsSubmitting(false)
        if (result.status === "success"){
          localStorage.setItem("token", result.data.jwt)
          localStorage.setItem("username", result.data.user.username)
          setSignup(result.data)
          localStorage.setItem("address", result.data.user.address)
          window.location.href="/"
          console.log(result)
        } else if (result.status === "error") {
          setErrrorMessage(result.message)
        }
      })
      .catch(error => console.log('error', error));
    console.log({userDetails})
  };

     const { email, password } = userDetails;
    return (
      <div className="login animate__animated animate__fadeInUp">
        <p className="hello">Welcome,</p>
        <span className="text">
          Welcome back to theBeat clothing store, sign in to continue
        </span>
        {errorMessage && <p className="error alert">{errorMessage}</p>}
        {successMessage && <p className="success alert ">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
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
          <div className="forget-password">
            <Link to="/reset-password">Forgot Password?</Link>
          </div>
          <div className="login-button">
            <CustomButton>
              Log In
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
          <div className="session_change">
            Don't have an account?
            <span className="sign-up-link">
              <Link to="/register">Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSignup: (data) => dispatch(setSignup(data))
  }
}

export default connect(null,{setSignup})(Login)