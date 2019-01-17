import { LOGIN_USER } from "./types";
import axios from  'axios';
export const loginUser = (userData) => dispatch => {
    axios
      .post('/student_login', userData)
      .then(res =>{
          console.log(res);
        dispatch({
            type: LOGIN_USER,
            payload: res
          })
      })
      .catch(err =>{
            console.log(err)

      }
        
      );
        
   };
   