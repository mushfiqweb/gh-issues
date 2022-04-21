import styled from 'styled-components';
import { setIssues } from 'actions/issueActions';
import { useDispatch } from "react-redux";
// import { useState } from 'react';
import { fetchIssues } from 'services/githubServices';
import { useHistory } from 'react-router-dom';
import paths from 'routes/paths';


function Home() {
    const dispatch = useDispatch();
    const history = useHistory();


    const fetchData = async () => {        
        const openedIssues = await fetchIssues('mushfiqweb', 'issue-tracker');
        const closedIssues = await fetchIssues('mushfiqweb', 'issue-tracker', 'closed');
        const allIssues = [...openedIssues, ...closedIssues];
        console.log({ allIssues });
        dispatch(setIssues(allIssues));
        history.push(paths.ISSUELIST);
    }



    return (
        <Wrapper>
            <h1> Home </h1>
            <button className='button' onClick={fetchData}>Fetch and show list</button>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
`;

export default Home;
