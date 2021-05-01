import { registerUserTypes } from './user.type'
import {user} from './user.state'
const INITIALIZE_STATE = {
      user,
}

const registerUserReducer = (state = INITIALIZE_STATE, action) => {
    if(action.type === registerUserTypes.REGISTER_USER_TYPES){
       return {
         ...state,
         registerUserDetails: state.user,
         registering: true,
       };

    }
    return state
}


export default registerUserReducer
