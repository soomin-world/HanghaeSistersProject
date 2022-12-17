import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  post: [],
  isLoading: true,
  error: null,
};

export const __postPost = createAsyncThunk(
  "postPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.post("http://localhost:300/posts", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
  extraReducers: {
    [__postPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__postPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [__postPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
