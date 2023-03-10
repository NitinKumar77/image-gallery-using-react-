import { call, put, takeEvery, select } from "redux-saga/effects";

import { setImageList, setIsloading } from "./Imageslice";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

function* ImageSaga() {
  yield takeEvery("Fetch_data", fetchImageList);
}

function* fetchImageList(action) {
  const query = action.payload.category;
  const per_page = action.payload.pages;
  const page = yield select();
  yield put(setIsloading(true));
  const response = yield call(() =>
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${per_page}&page=${page}&format=json&nojsoncallback=1`
    )
  );
  try {
    if (!response.ok) {
      throw Error("FETCHING WENT WRONG");
    }
    const data = yield response.json();

    yield put(setImageList(data.photos.photo));
    yield put(setIsloading(false));
  } catch (error) {}
}
export default ImageSaga;
