import {all, takeLatest, takeEvery} from 'redux-saga/effects'
import {CAT_LIST_FETCH} from '../actions/catList'
import {FETCH_BREED_LIST, FETCH_BREED_IMAGE, FETCH_BREED_BY_ID} from '../actions/breedList'
import catListSaga from './catList'
import {fetchBreedList, fetchBreedImage, fetchBreedById} from './breedList'

export default function* rootSaga() {
  yield all([
    takeLatest(CAT_LIST_FETCH, catListSaga),
    takeLatest(FETCH_BREED_LIST, fetchBreedList),
    takeEvery(FETCH_BREED_IMAGE, fetchBreedImage),
    takeLatest(FETCH_BREED_BY_ID, fetchBreedById)
  ])
}
