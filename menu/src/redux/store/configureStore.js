import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'

const configureStore = () => {
    const middlewares = [thunk]
    const enhanders = applyMiddleware(...middlewares)

    const composedEnhancers = composeWithDevTools(enhanders)

    const store = createStore(rootReducer, composedEnhancers)

    return store
}

export default configureStore
