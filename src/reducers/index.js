import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import LoginReducer from './LoginReducer';


export default combineReducers({
 reg: registerReducer,
 login:LoginReducer

});
