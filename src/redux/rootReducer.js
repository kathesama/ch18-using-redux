import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import userAuthReducer from './userAuthentication/userAuthSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  userAuthentication: userAuthReducer,
});

export default rootReducer;
