import axios from 'axios'
import { APP, STORES } from '../CONSTANTS'
import endpoints from '@/config/endpoints'

export const setAuthData = (data) => (dispatch) => {
    dispatch({
        type: APP.SET_AUTH_DATA,
        payload: data,
    })
}

export const setSelectedStore = (uuid) => (dispatch) => {
    dispatch({
        type: STORES.SET_SELECTED_STORE,
        payload: uuid,
    })
}

export const getMyStores = () => async (dispatch, getState) => {
    const state = getState()
    const { access } = state.auth.data
    try {
        dispatch({ type: STORES.FETCH_START })

        const { data } = await axios.get(endpoints.stores.myStores, {
            headers: {
                authorization: 'Bearer ' + access,
            },
        })

        dispatch({
            type: STORES.FETCH_SUCCESS,
            payload: data.result,
        })
    } catch (error) {
        dispatch({
            type: STORES.FETCH_ERROR,
            error: error.message,
        })
    }
}
