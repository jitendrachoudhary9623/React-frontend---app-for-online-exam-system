
import {combineReducers,createStore} from 'redux';
import userReducer from "../reducers/user.reducer"


export const allReducers=combineReducers({
    user:userReducer
  });
  
  export const store=createStore(allReducers,{
    user:{username:"",loggedIn:false}
  }
  );
