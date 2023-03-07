import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  imageList: [],
  query: "",
};
const Imageslice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageList(state, action) {
      state.imageList = action.payload;
    },
    setQuery(state, action) {
      console.log(action.payload);
      state.query = action.payload;
    },
  },
});
export const { setQuery, setImageList } = Imageslice.actions;
export default Imageslice;
