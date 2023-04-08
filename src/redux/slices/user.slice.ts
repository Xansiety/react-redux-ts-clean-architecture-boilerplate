import { UserEmptyState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";


// Immutability is enforced by the toolkit
export const userSlice = createSlice({
  name: "user",
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetUser: (state) => {
      return UserEmptyState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

// export reducer to be used in store configuration
export default userSlice.reducer;
