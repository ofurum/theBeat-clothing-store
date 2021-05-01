import axios from 'axios';
import {registerUserTypes} from './user.type'

export const signingUser = (userData) => {
    console.log("signin", userData)
    return async (dispatch) =>{
            try{
                const xTag = localStorage.getItem("x-tag");
                console.log("x-tag ======", xTag)
                const {data:{status, data}} = await axios.post(
                  "https://masters-prj.herokuapp.com/register", userData,
                  {headers:{"x-tag": xTag}}
                );
                console.log(status, data);
                if(status === "success"){
                    dispatch(setSignup(data));
                }else{
                    console.log("new sign up");
                }
                
                
                
            }catch(error){
                console.log(error)
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

