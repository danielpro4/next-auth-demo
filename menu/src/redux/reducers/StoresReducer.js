import { STORES } from '../CONSTANTS'

const INITIAL_STATE = {
    ui: {
        loading: false,
    },
    data: {},
    error: null,
}

const StoresReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORES.FETCH_START: {
            return {
                ...state,
                ui: {
                    loading: true,
                },
            }
        }
        case STORES.FETCH_SUCCESS: {
            return {
                ...state,
                ui: {
                    loading: false,
                },
                data: action.payload,
            }
        }
        case STORES.FETCH_ERROR: {
            return {
                ...state,
                ui: {
                    loading: false,
                },
                error: action.error,
            }
        }
        default:
            return state
    }
}

export default StoresReducer
