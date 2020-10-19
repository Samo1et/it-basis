import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'
import {wizardReducer} from './wizardModule'


const reducers = combineReducers({
    wizard: wizardReducer
  })

const initialState = { }

const createStore = () => reduxCreateStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
export default createStore