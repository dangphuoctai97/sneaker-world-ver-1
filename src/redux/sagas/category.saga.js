import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* getCategoryListSaga() {
  try {
    const result = yield axios.get("http://localhost:4000/categories");
    yield put({
      type: "GET_CATEGORY_LIST_SUCCESS",
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: "GET_CATEGORY_LIST_FAIL",
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* categorySaga() {
  yield takeEvery("GET_CATEGORY_LIST_REQUEST", getCategoryListSaga);
}
