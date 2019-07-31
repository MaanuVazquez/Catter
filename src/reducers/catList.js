import {CAT_LIST_FETCH, CAT_LIST_FETCH_ERROR, CAT_LIST_FETCH_SUCCESS} from '../actions/catList'

const initialState = {
  loading: false,
  error: null,
  cats: []
}

export default function catListReducer(state = initialState, action) {
  switch (action.type) {
    case CAT_LIST_FETCH:
      return {
        ...initialState,
        loading: true
      }
    case CAT_LIST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CAT_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        cats: action.payload
      }
    default:
      return state
  }
}
