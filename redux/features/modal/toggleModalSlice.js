import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  toggleUserModal: false,
  toggleProductModal: false,
  toggleMenu: false,
};

const toggleModalSlice = createSlice({
  name: "toggleModal",
  initialState,
  reducers: {
    toggleUserModal: (state, action) => {
      return { ...state, toggleUserModal: !state.toggleUserModal };
    },
    toggleProductModal: (state, action) => {
      return { ...state, toggleProductModal: !state.toggleProductModal };
    },
    toggleMenu: (state, action) => {
      return { ...state, toggleMenu: !state.toggleMenu };
    },
  },
});

export const { toggleUserModal, toggleProductModal, toggleMenu } =
  toggleModalSlice.actions;
export default toggleModalSlice.reducer;
