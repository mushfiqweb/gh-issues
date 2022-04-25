import {
    SET_ISSUES,
    GET_ISSUES_FROM_STORE,
    GET_FILTERED_ISSUES
} from "../actions/types";

const initialState = [];

const IssuesReducer = (issues = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ISSUES:
            return payload;

        case GET_ISSUES_FROM_STORE:
            return issues;

        case GET_FILTERED_ISSUES:
            {
                console.log(payload);
                return issues.filter(issue => {
                    return issue.state === payload.filter;
                });
            }


        default:
            return [];
    }
}


export default IssuesReducer;