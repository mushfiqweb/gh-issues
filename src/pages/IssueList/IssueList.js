import { useEffect, useState } from "react";
import _ from "lodash";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { getIssuesFromStore } from 'actions/issueActions';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);

function IssueList() {
    const timeAgo = new TimeAgo('en-US')
    const issues = useSelector(store => store.issuesReducer);
    const dispatch = useDispatch();
    const [issueList, setIssueList] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        dispatch(getIssuesFromStore());
        setIssueList(issues);
        setCount(issues.length);
    }, [dispatch, issues]);

    console.log({ issueList });

    const handleStateChange = (e) => {
        console.log(e.target.id);
        setIssueList(_.filter(issues, ['state', e.target.id]));
        setCount(issueList.length);
    }

    return (
        <Wrapper>
            <section className="result-sec">
                <div className="issue-result">
                    <div className="issue-table">
                        <h2>
                            Issue(s) <span>{count}</span>
                        </h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="issue-type">
                                        <input
                                            type="radio"
                                            id="open"
                                            name="open_or_close"
                                            defaultChecked=""
                                            onChange={handleStateChange}
                                        />
                                        <label htmlFor="open">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                role="img"
                                                width="1em"
                                                height="1em"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="white"
                                                    fillRule="evenodd"
                                                    d="M2.5 12a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm0 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
                                                />
                                            </svg>
                                            Open
                                        </label>
                                        <br />
                                        <input
                                            type="radio"
                                            id="closed"
                                            name="open_or_close"
                                            onChange={handleStateChange}
                                        />
                                        <label htmlFor="closed">✔ Closed</label>
                                        <br />
                                    </th>
                                </tr>

                                {
                                    issues && issueList.map(issue => (
                                        <tr key={issue.number}>
                                            <td className="issue-list">
                                                <div className="issue-name">
                                                    {
                                                        issue.state === 'open' ? <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                            role="img"
                                                            width="1em"
                                                            height="1em"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="#0dd9a8"
                                                                fillRule="evenodd"
                                                                d="M2.5 12a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm0 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
                                                            />
                                                        </svg> : <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                            role="img"
                                                            width="1em"
                                                            height="1em"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 0 15 15"
                                                        >
                                                            <path
                                                                fill="none"
                                                                stroke="#9a41ea"
                                                                d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
                                                            />
                                                        </svg>
                                                    }
                                                    <div>
                                                        <h4>
                                                            {issue.title}
                                                        </h4>
                                                        <p>
                                                            {
                                                                `#${issue.number} ${issue.state} ${timeAgo.format(new Date(issue.created_at))} ago by ${issue.user.login}`
                                                            }

                                                        </p>
                                                    </div>
                                                </div>
                                                {
                                                    issue.comments > 0 && <div className="comment">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                            role="img"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="rgba(230, 231, 233, 0.5411764705882353)"
                                                                d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"
                                                            />
                                                        </svg>
                                                        <span>{issue.comments}</span>
                                                    </div>
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
`;

export default IssueList;
