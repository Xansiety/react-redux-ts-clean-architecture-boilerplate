import { configureStore } from "@reduxjs/toolkit";
import { User } from "../models";
import { userReducer } from "./slices";

export interface AppStore {
    user: User;
}

// "Single source of truth" for the store
export const store = configureStore<AppStore>({
  reducer: {
    user:  userReducer
  },
});