import React, { useEffect } from "react";

import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { getIssuesFromStore } from 'actions/issueActions';


function IssueList() {
    const issues = useSelector(store => store.issuesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIssuesFromStore());
    }, [dispatch]);

    console.log(issues);

    return (
        <Wrapper>
            <h1> Issue List </h1>
            <br />
            <div className="issue-states">
                <input type="checkbox" id="opened" name="opened"
                    value="opened" /> Opened
            </div>
            <div className="issue-states">
                <input type="checkbox" id="closed" name="closed"
                    value="closed" /> Closed
            </div>

            <br />

            <br />
            <ul>


                {
                    issues && issues.map(issue => (
                        <li key={issue.id}>
                            <h2>{issue.title}</h2>
                        </li>
                    ))
                }

            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
`;

export default IssueList;
