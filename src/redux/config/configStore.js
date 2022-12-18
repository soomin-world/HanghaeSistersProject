import { configureStore } from "@reduxjs/toolkit";

import post from "../modules/postSlice";
import userReducer from "../modules/userSlice";

const store = configureStore({
  reducer: { 
    post: post, 
    user: userReducer,
  
  },
});

export default store;