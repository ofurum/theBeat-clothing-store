import { registerUserTypes } from './user.type'
import {user} from './user.state'
const INITIALIZE_STATE = {
      user,
}

const storeUser = (state, {payload}) => {
    console.log(state, payload)
    return {
        ...state, user: payload
    }
}

const userReducer = (state = INITIALIZE_STATE, action) => {
    if(action.type === registerUserTypes.REGISTER_USER_TYPES){
       return storeUser(state, action)

    }
    return state
}


export default userReducer
