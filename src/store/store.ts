import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../reducers/combineReducer'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(
	thunk
)
const store = createStore(rootReducer, composeWithDevTools(middleware))

export default store