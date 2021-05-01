import axios from 'axios';
import {registerUserTypes} from './user.type'

export const signedUser = (userData) => {
        return async (dispatch) =>{
            try{
                const xTag = localStorage.getItem("x-tag");
                console.log("x-tag ======", xTag)
                const signupData = await axios.post(
                  "https://masters-prj.herokuapp.com/register", userData,
                  {headers:{"x-tag": xTag}}
                );
                console.log('>>>Data',signupData)
                dispatch(setSignup(signupData));
            }catch(error){
               console.log('currentUser>>', error)
         } 
        }
}

function setSignup(user){
    return {
      type: registerUserTypes.REGISTER_USER_TYPES,
      payload: user,
    };
}

