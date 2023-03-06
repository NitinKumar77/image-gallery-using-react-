import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  imageList: [],
};
const Imageslice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageList(state, action) {
      state.imageList = action.payload;
    },
  },
});
export const { callSagaFunction, setImageList } = Imageslice.actions;
export default Imageslice;
