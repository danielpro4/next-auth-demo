import { APP } from '../CONSTANTS'

const INITIAL_STATE = {
    ui: {
        loading: false,
    },
    data: {
        access: null,
        refresh: null,
    },
    error: null,
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case APP.SET_AUTH_DATA: {
            return {
                ...state,
                data: action.payload,
            }
        }

        default:
            return state
    }
}

export default AuthReducer
