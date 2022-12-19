import { configureStore } from "@reduxjs/toolkit";

import post from "../modules/postSlice";

const store = configureStore({
  reducer: { post: post,
    comment : commentReducer,
    user : userReducer,
  },
  
});

export default store;
