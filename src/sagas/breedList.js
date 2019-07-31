import {call, put} from 'redux-saga/effects'
import {
  fetchBreedListSuccess,
  fetchBreedListError,
  fetchBreedImageError,
  fetchBreedImageSuccess,
  fetchBreedByIdSuccess,
  fetchBreedByIdError
} from '../actions/breedList'
import {fetchBreeds, fetchImageFromBreedId, fetchBreed} from '../utils/api'

export function* fetchBreedList() {
  try {
    const breedList = yield call(fetchBreeds)
    yield put(fetchBreedListSuccess(breedList))
  } catch (error) {
    console.error(error)
    yield put(fetchBreedListError(error))
  }
}

export function* fetchBreedImage({payload}) {
  try {
    const url = yield call(fetchImageFromBreedId, payload)
    yield put(fetchBreedImageSuccess(payload, url))
  } catch (error) {
    console.error(error)
    yield put(fetchBreedImageError(error))
  }
}

export function* fetchBreedById({payload}) {
  try {
    const breed = yield call(fetchBreed, payload)
    yield put(fetchBreedByIdSuccess(payload, breed))
  } catch (error) {
    console.error(error)
    yield put(fetchBreedByIdError(payload, error))
  }
}
