import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import SelectedStoreReducer from './SelectedStoreReducer'
import StoresReducer from './StoresReducer'

const reducers = combineReducers({
    auth: AuthReducer,
    stores: StoresReducer,
    selectedStore: SelectedStoreReducer,
})

export default reducers
