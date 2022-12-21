// 리듀서, 미들웨어
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API, cookie
import { instance } from "../../core/api/axios";

import { getCookie, setCookie } from "../../shared/Cookie";


const initialState = {
  // user안에 리듀서가 관리할 데이터가 들어가고
  // isLoading - 서버와의 통신결과
  // error - 에러객체 저장
  // 유저의 상태에 따라 추가 가능?
  user: [],
  userCheck: [],
  userSignup: null,
  isLoading: false,
  error: null,
};


const config = {headers : {Authorization:`${getCookie('is_login')}`}}


// ------------------------------------------------- 미들웨어
// 중복체크 ( 유저 데이터 보내기, 결과 받기 )
export const __userCheck = createAsyncThunk(
  "userCheck",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.get(
        `/api/user/idcheck?username=${payload}`
      );
      console.log("중복확인: ", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 회원가입 ( 유저 데이터 보내기, 결과 받기)
export const __signUpUser = createAsyncThunk(
  "signUpUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.post("/api/user/signup", payload);

      console.log('로딩데이터: ', data)

      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 로그인하기
export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {

      console.log(payload);
      const { data } = await instance.post("/api/user/login", payload, config)


      // let token = instance.defaults.headers.common["Authorization"];
      // // const token = data.token;
      // console.log(token);
      // setCookie("is_login", token);
      return thunkAPI.fulfillWithValue(data, payload);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
      // 서버가 400번대 코드를 설정해놓으면
      // axios가 여기로 보냄
    }
  }
);

// 로그인 유지는? 프론트에서 어려움이 있음?

// 로그인 토큰 만료시간이 있음
// => 포스트/댓글/페이지이동을 할 때마다 로그인 체크

// 1.프론트는 db가 없기 때문에, 새로고침을 하면 데이터가 다 날아감
// 2.만료시간이 지나지 않은 유저에게 다시 로그인 요청을 해야 함, XXXX안됨!!
// 3.쿠키에 저장해놓은 토큰을 가지고 로그인 요청을 하는 API를 새로 만들어야 하지 않을까
// 4.제가 생각한 게 맞는지. 모르겠씀다.

// ---------------------------- 리듀서
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // 중복확인  ---------------
    [__userCheck.pending]: (state) => {
      state.isLoading = true;
    },
    [__userCheck.fulfilled]: (state, action) => {
      console.log("action-서버값", action);
      state.isLoading = false;

      // 서버에서 받아오는 값을 저장할 공간이 겹쳤음 -> 새로 check로 만들어줌
      state.userCheck = action.payload;

    },
    [__userCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 회원가입  ---------------
    [__signUpUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__signUpUser.fulfilled]: (state, action) => {
      console.log("action-서버값", action);
      state.isLoading = false;
      state.userSignup = action.payload;
    },
    [__signUpUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 로그인 -----------------받음 payload(username),data
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      // 여기서 뭐해줘야 하지? 스토어에 저장할 값.
      // 토큰은 쿠키에 저장했으니까 안해줘도 될거같고
      // 유저 데이터랑, 성공메세지(알림띄움용) 보내주면 될듯.
      console.log("action-서버값", action);

      console.log()

      state.user = action.payload;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
