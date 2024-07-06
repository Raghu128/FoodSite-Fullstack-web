import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    role : "",
    userName: "NotDefine",
  },
  reducers: {
    updateLogin: (state, action) => {
      console.log(action.payload.role);

      state.isLogin = true;
      state.role = action.payload.role;
      state.userName = action.payload.name;
    },
    updateLogout: (state, action) => {
      state.isLogin = false;
      state.role = "";
      state.userName = "notdefine";
    }
  },
});

export const { updateLogin, updateLogout } = userSlice.actions;
export default userSlice.reducer;
