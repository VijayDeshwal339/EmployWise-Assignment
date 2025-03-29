import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import usersReducer from "./slice/usersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export default store;
