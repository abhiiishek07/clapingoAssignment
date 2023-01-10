import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: localStorage.getItem("userID")
    ? JSON.parse(localStorage.getItem("userID"))
    : [],
  reducers: {
    addUser(state, action) {
      localStorage.setItem("userID", JSON.stringify(action.payload[0]));
      localStorage.setItem("password", JSON.stringify(action.payload[1]));
      return (state = action.payload);
    },
    removeUser(state, action) {
      localStorage.removeItem("userID");
      localStorage.removeItem("password");
      return (state = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
