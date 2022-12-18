// 2_creadteSlice는 리듀서의 역할 
//   => 액션value, 액션함수, 리듀서를 합쳐놓았기 때문에 코드가 간략해짐
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// 기본데이터 diary안에 관리할 데이터가 들어가고
// isLoading - 서버와의 통신결과
// error - 에러객체 저장
const initialState = {
  user: [],
  isLoading: false,
  error: null,
};


// --------------------------------------------------Diary 미들웨어
// 회원가입 ( 유저 데이터 보내기, 결과 받기) 
export const __signUpUser = createAsyncThunk(
  "getUser",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3005/user");
      // console.log('로딩데이터: ', data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// 로그인하기
// 로그인 정보 보내고, 토큰 
export const __loginUser = createAsyncThunk(
  "addUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.post("http://localhost:3005/user", payload);
      console.log("추가데이터: ", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);


// --------------------------------------------------Diary 리듀서
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // 리스트 불러오기 ---------------
    [__getUser.pending]: (state) => {
      state.isLoading = true;
      // 네트워크 요청 시작-> 로딩 true 변경합니다.
    },
    [__getUser.fulfilled]: (state, action) => {
      // action으로 받아온 객체를 store에 있는 값에 넣어준다
      state.isLoading = false;
      state.diary = action.payload;
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // 에러 발생-> 네트워크 요청은 끝,false
      // catch 된 error 객체를 state.error에 넣습니다.
    },

    // 리스트 추가 ------------------
    [__addDiary.pending]: (state) => {
      state.isLoading = true;
    },
    [__addDiary.fulfilled]: (state, action) => {
      // 액션으로 받은 값 = payload 추가해준다.
      console.log("action-서버값", action.payload);
      state.isLoading = false;
      state.diary = [...state.diary, action.payload];
    },
    [__addDiary.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 리스트 삭제 ------------------
    [__delDiary.pending]: (state) => {
      state.isLoading = true;
    },
    [__delDiary.fulfilled]: (state, action) => {
      // 미들웨어를 통해 받은 action값이 무엇인지 항상 확인한다
      console.log("action-서버값", action.payload);
      state.isLoading = false;
      const newList = state.diary.filter((t) => t.id !== action.payload);
      state.diary = [...newList];
    },
    [__delDiary.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 수정 버튼 클릭 -----------------
    [__editStartDiary.pending]: (state) => {
      state.isLoading = true;
    },
    [__editStartDiary.fulfilled]: (state, action) => {
      // console.log('state-store값',state.diary)
      console.log("action-서버값", action);
      state.isLoading = false;
      const copy = [...state.diary];
      const index = state.diary.findIndex((c) => +c.id === +action.payload.id);
      state.diary[index] = action.payload;
      state.diary = [...state.diary];
    },
    [__editStartDiary.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 수정 완료 버튼 클릭 -----------------
    [__editStartDiary.pending]: (state) => {
      state.isLoading = true;
    },
    [__editStartDiary.fulfilled]: (state, action) => {
      // console.log('state-store값',state.diary)
      console.log("action-서버값", action);
      state.isLoading = false;
      const index = state.diary.findIndex((c) => +c.id === +action.payload.id);
      state.diary[index] = action.payload;
      state.diary = [...state.diary];
    },
    [__editStartDiary.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
