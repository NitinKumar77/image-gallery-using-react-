import { call, put, takeEvery } from "redux-saga/effects";
import { setImageList } from "./Imageslice";

// const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
// const query = "mountains";
// const per_page = "40";

function* ImageSaga() {
  yield takeEvery("Fetch_data", fetchImageList);
}

function* fetchImageList() {
  const response = yield call(() =>
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=mountains&per_page=40&format=json&nojsoncallback=1"
      // `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${per_page}&format=json&nojsoncallback=1`
    )
  );
  try {
    const data = yield response.json();

    yield put(setImageList(data.photos.photo));
  } catch (error) {
    if (!response.ok) {
      throw Error("FETCHING WENT WRONG");
    }
  }
}
export default ImageSaga;
