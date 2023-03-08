import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  imageList: [],
  query: "",
  imagesPerPage: "10",
  loading: true,
};
const Imageslice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageList(state, action) {
      state.imageList = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setImagesPerPage(state, action) {
      state.imagesPerPage = action.payload;
    },
    setIsloading(state, action) {
      state.loading = action.payload;
      console.log(current(state));
    },
  },
});
export const { setIsloading, setImagesPerPage, setQuery, setImageList } =
  Imageslice.actions;
export default Imageslice;
