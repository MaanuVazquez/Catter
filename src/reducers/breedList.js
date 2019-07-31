import {normalizeBreeds} from '../utils'
import {
  FETCH_BREED_LIST,
  FETCH_BREED_LIST_ERROR,
  FETCH_BREED_LIST_SUCCESS,
  FETCH_BREED_IMAGE,
  FETCH_BREED_IMAGE_ERROR,
  FETCH_BREED_IMAGE_SUCCESS,
  FETCH_BREED_BY_ID,
  FETCH_BREED_BY_ID_SUCCESS,
  FETCH_BREED_BY_ID_ERROR,
  CHANGE_SEARCH_TERM
} from '../actions/breedList'

const INITIAL_STATE = {
  loading: false,
  error: null,
  breeds: {},
  fetched: false,
  searchTerm: ''
}

export default function breedListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BREED_LIST:
      return {...INITIAL_STATE, loading: true}
    case FETCH_BREED_LIST_SUCCESS:
      return {...state, loading: false, breeds: normalizeBreeds(action.payload), fetched: true}
    case FETCH_BREED_LIST_ERROR:
      return {...state, loading: false, error: action.payload}
    case FETCH_BREED_IMAGE:
      return {
        ...state,
        breeds: {
          ...state.breeds,
          [action.payload]: {
            ...state.breeds[action.payload],
            imageLoading: true,
            image: null,
            imageError: null
          }
        }
      }
    case FETCH_BREED_IMAGE_SUCCESS:
      return {
        ...state,
        breeds: {
          ...state.breeds,
          [action.payload.id]: {
            ...state.breeds[action.payload.id],
            imageLoading: false,
            image: action.payload.image
          }
        }
      }
    case FETCH_BREED_IMAGE_ERROR:
      return {
        ...state,
        breeds: {
          ...state.breeds,
          [action.payload.id]: {
            ...state.breeds[action.payload.id],
            imageLoading: false,
            error: action.payload.error
          }
        }
      }
    case FETCH_BREED_BY_ID:
      return {
        ...state,
        breeds: {
          ...state.breeds,
          loading: true
        }
      }
    case FETCH_BREED_BY_ID_SUCCESS:
      return {
        ...state,
        breeds: {
          ...state.breeds,
          loading: false,
          [action.payload.id]: action.payload.breed
        }
      }
    case FETCH_BREED_BY_ID_ERROR:
      return {
        ...state,
        breeds: {
          ...state.breeds,
          loading: false,
          error: action.payload.error
        }
      }
    case CHANGE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state
  }
}
