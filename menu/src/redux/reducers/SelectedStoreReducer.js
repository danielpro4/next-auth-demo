import { STORES } from '../CONSTANTS'

const INITIAL_STATE = {
    ui: {
        loading: false,
    },
    data: null,
    error: null,
}

const SelectedStoreReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORES.SET_SELECTED_STORE: {
            return {
                ...state,
                data: action.payload,
            }
        }

        default:
            return state
    }
}

export default SelectedStoreReducer
