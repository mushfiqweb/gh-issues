import {
    SET_ISSUES,
    GET_ISSUES_FROM_STORE,
    GET_FILTERED_ISSUES
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

export const getFilteredIssues = (issues, filter) => (dispatch) => {
    dispatch({
        type: GET_FILTERED_ISSUES,
        payload: {
            issues,
            filter
        }
    });
}