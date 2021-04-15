import { combineReducers } from 'redux'
import indexReducer from './reducers/indexPageReducer'

const rootReducers = combineReducers({
  list:indexReducer
})

export default rootReducers