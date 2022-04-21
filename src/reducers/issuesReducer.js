import {
    SET_ISSUES,
    GET_ISSUES_FROM_STORE
} from "../actions/types";

const initialState = [];

const IssuesReducer = (issues = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ISSUES:
            return payload;

        case GET_ISSUES_FROM_STORE:
            return issues;

        default:
            return [];
    }
}


export default IssuesReducer;