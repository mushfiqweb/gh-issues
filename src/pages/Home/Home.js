import { useState } from 'react';
import styled from 'styled-components';
import { setIssues } from 'actions/issueActions';
import { useDispatch } from "react-redux";
// import { useState } from 'react';
import { fetchIssues } from 'services/githubServices';
import { useHistory } from 'react-router-dom';
import paths from 'routes/paths';
import TextInput from 'components/TextInput';
import Button from 'components/Button';


function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [owner, setOwner] = useState('');
    const [repo, setRepo] = useState('');
    const [isRepoTouched, setIsRepoTouched] = useState(false);
    const [isOwnerTouched, setIsOwnerTouched] = useState(false);
    const [isValidOwner, setIsValidOwner] = useState(true);
    const [isValidRepo, setIsValidRepo] = useState(true);

    const fetchData = async () => {
        const openedIssues = await fetchIssues(owner, repo);
        console.log({ openedIssues });
        if (!openedIssues.error) {
            console.log('fetching issues');
            const closedIssues = await fetchIssues(owner, repo, 'closed');
            const allIssues = [...openedIssues, ...closedIssues];
            console.log({ allIssues });
            dispatch(setIssues(allIssues));
            history.push(paths.ISSUELIST);
        }
        else {
            alert('Not Found, check your repo name, owner and GITHUB_USER_TOKEN');
        }

    }

    const handleInputChange = (e) => {
        if (e.target.name === 'owner') {
            setIsOwnerTouched(true);
            setOwner(e.target.value);
            if (e.target.value && e.target.value.length > 0) {
                setIsValidOwner(true);
            }
            else {
                setIsValidOwner(false);
            }
        }
        if (e.target.name === 'repo') {
            setRepo(e.target.value);
            setIsRepoTouched(true);
            if (e.target.value && e.target.value.length > 0) {
                setIsValidRepo(true);
            }
            else {
                setIsValidRepo(false);
            }
        }
    }

    const doClick = () => {

        if (owner.length === 0) {
            setIsValidOwner(false);
            return;
        }
        if (repo.length === 0) {
            setIsValidRepo(false);
            return;
        }
        fetchData();

    }
    return (
        <Wrapper>
            <InputContainer>
                <TextInput
                    placeholder='Repository Owner'
                    name='owner'
                    onChange={handleInputChange}
                    isTouched={isOwnerTouched}
                    invalid={!isValidOwner}
                    inputLabel='Owner'
                />
                <TextInput
                    placeholder='Repository Name'
                    name='repo'
                    onChange={handleInputChange}
                    isTouched={isRepoTouched}
                    invalid={!isValidRepo}
                    inputLabel='Repository'
                />
            </InputContainer>
            <Button buttonType='submit' buttonText='Show Issues' onClick={doClick} />

        </Wrapper>
    );
}

const InputContainer = styled.div`
    max-width: 780px;
    margin: 120px auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    
    @media (min-width: 768px){
        flex-direction: row;
    }
`;

const Wrapper = styled.div`
    height: 100vh;
`;

export default Home;
