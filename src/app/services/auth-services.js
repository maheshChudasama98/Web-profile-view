import jwtAuthAxios from "./auth/jwtAuth";
import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, SHOW_MESSAGE } from "app/utils/constants/reduxActions";
import { errorHandler } from "app/helper/apiErrorHandler";

export const loginApiAction = (data, cb) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        jwtAuthAxios.post('login', data).then((res) => {
            if (res.data.status) {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: SHOW_MESSAGE, payload: res.data.message });
                localStorage.setItem('token', res.data.token)
                if (cb) cb(res.data.data)
            } else {
                dispatch({ type: FETCH_ERROR, payload: res.data.message });
            }
        }).catch((error) => {
            // console.log(error);
            errorHandler(error, dispatch)
        })
    }
}