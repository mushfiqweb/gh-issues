import {
    SET_ISSUES,
    GET_ISSUES_FROM_STORE
} from "./types";


export const setIssues = (issues) => (dispatch) => {
    dispatch({
        type: SET_ISSUES,
        payload: issues
    });
}

export const getIssuesFromStore = () => (dispatch) => {
    dispatch({
        type: GET_ISSUES_FROM_STORE
    });
}
