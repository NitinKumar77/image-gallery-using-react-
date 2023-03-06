import { createSlice } from "@reduxjs/toolkit";

const Imageslice = createSlice({
  name: "image",
  initialstate: {
    imageList: [],
  },
  reducers: {
    setImageList(state, action) {
      state.imageList = action.payload;
    },
  },
});
export const { callSagaFunction, setImageList } = Imageslice.actions;
export default Imageslice;
