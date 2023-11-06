import { configureStore } from "@reduxjs/toolkit";
import toggleModalReducer from "./features/modal/toggleModalSlice";
import usersReducer from "./features/user/usersSlice";

const store = configureStore({ reducer: { usersReducer, toggleModalReducer } });

export default store;
