import { createSlice } from "@reduxjs/toolkit";

const selectedUserSlice = createSlice({
  name: "selecteduser",
  initialState: {
    "userId" : ""
  },
  reducers: {
    setSelectedUser: (state, action) => {
      return  state.userId= action.payload ;
    },

  }
});

export default selectedUserSlice.reducer;
export const { setSelectedUser } = selectedUserSlice.actions;
