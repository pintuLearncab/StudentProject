import { REG_USER } from "./types";
import axios from  'axios';
export const registerUser = (userData, history) => dispatch => {
    axios
      .post('/student_signup', userData)
      .then(res =>{
          console.log(res);
        dispatch({
            type: REG_USER,
            payload: res.data
          })
      })
      .catch(err =>{
            console.log(err)

      }
        
      );
        
   };
   