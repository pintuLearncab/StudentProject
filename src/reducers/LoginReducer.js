import { LOGIN_USER } from "../actions/types";

const initialState = {
 isAuthenticate:false,
 user: {}
 
};

export default function(state = initialState, action) {
 switch (action.type) {
   case LOGIN_USER:
     return {
       ...state,
       isAuthenticate:true,
       user:action.payload
     };

     default:
       return state

    }}
