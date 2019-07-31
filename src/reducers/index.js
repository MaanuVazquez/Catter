import {combineReducers} from 'redux'
import catListReducer from './catList'
import breedListReducer from './breedList'

export default combineReducers({
  catList: catListReducer,
  breedList: breedListReducer
})
