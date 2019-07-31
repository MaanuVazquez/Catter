import {call, put} from 'redux-saga/effects'
import {catListFetchError, catListFetchSuccess} from '../actions/catList'
import {fetchKittens} from '../utils/api'

export default function* fetchCatList(action) {
  try {
    const catList = yield call(fetchKittens, action.payload)
    yield put(catListFetchSuccess(catList))
  } catch (error) {
    yield put(catListFetchError(error))
  }
}
