import { combineReducers } from 'redux'
import { wizardReducer } from './wizardModule'


// COMBINED REDUCERS
const reducers = {
  wizard: wizardReducer,
}

export default combineReducers(reducers)