import { createSlice } from "@reduxjs/toolkit";
import { userRows } from "@/utils/data";

const initialState = {
  users: userRows,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      if (!action.payload) return state;
      return { ...state, users: action.payload };
    },
  },
});

export const { getUsers, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
