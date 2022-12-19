
import { configureStore } from "@reduxjs/toolkit";

import commentReducer from "../modules/commentTest";
import userReducer from "../modules/userSlice";

// 모듈(Slice)이 여러개인 경우 추가할때마다
// reducer 안에 각 모듈의 slice.reducer를 추가해줘야 합니다.
// configureStore = 모듈과 store생성

const store = configureStore({
  reducer: { 
    // module 추가
    comment : commentReducer,
    user : userReducer,
  },
});

export default store;