import axios from 'axios';
import { fetchIntilized } from './initilize.type';

export function fetchIntilize() {
       return async (dispatch) => {
         try{
              const {data: {data}} = await axios.get(
                "https://masters-prj.herokuapp.com/initialize",
              );
            
              localStorage.setItem("x-tag", data["x-tag"])
              dispatch(setFetchedIntilize(data));
         }catch(error){{
             console.log(error)
         }}  
       };

}

function setFetchedIntilize(data) {
  return {
    type: fetchIntilized.SET_FETCTED_INTILIZE,
    payload: data,
  };
}