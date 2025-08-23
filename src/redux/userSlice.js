import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users = state.users || [];
      const existingUser = state.users.find(
        (u) => u.email === action.payload.email
      );
      if (!existingUser) {
        state.users.push(action.payload);
      } else {
        alert("Bu email artıq mövcuddur!");
      }
    },
    loginUser: (state, action) => {
      state.users = state.users || [];
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
      } else {
        alert("Email və ya şifrə yalnışdır!");
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export const selectCurrentUser = (state) => state.user.currentUser;
export default userSlice.reducer;
