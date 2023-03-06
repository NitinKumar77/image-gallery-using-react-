import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import ImageSaga from "./ImageSaga";
import Imageslice from "./Imageslice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: Imageslice.reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(ImageSaga);
export default store;
