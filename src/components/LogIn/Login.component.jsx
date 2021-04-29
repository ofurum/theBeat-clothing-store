import React,{useState} from 'react';
import FormInput from '../Form/form.component';
import { Link } from "react-router-dom";
import CustomButton from '../CustomButton/customButton.component'
import './LogIn.styles.scss';


const Login = () => {
const initialState ={
    email: '',
    password: '',
}

const [userDetails, setUserDetails] = useState(initialState);

const handleChange = (e) => {
    const {name, value}= e.target
    setUserDetails(deatils =>({...deatils, [name]: value}))
}
     const { email, password } = userDetails;
    return (
      <div className="login">
        <p className="hello">Welcome,</p>
        <span className="text">
          Welcome back to theBeat clothing store, sign in to continue
        </span>
        <form>
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
            <CustomButton>Log In</CustomButton>
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

export default Login