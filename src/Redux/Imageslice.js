import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  imageList: [],
  query: "",
  imagesPerPage: "10",
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
    setImagesPerPage(state, action) {
      state.imagesPerPage = action.payload;
    },
  },
});
export const { setImagesPerPage, setQuery, setImageList } = Imageslice.actions;
export default Imageslice;
