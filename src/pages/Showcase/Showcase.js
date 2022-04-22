import styled from 'styled-components';
import TextInput from 'components/TextInput';
import Button from 'components/Button';

function Showcase() {

    const handleInputChange = (e) => {
        console.log(e.target.value);
    }

    const doClick = () => {
        alert('clicked');
    }

    return (
        <Wrapper>
            <InputContainer>
                <TextInput placeholder='Repository Owner' name='owner' onChange={handleInputChange} />
                <TextInput placeholder='Repository Name' name='repo' onChange={handleInputChange} />
            </InputContainer>
            <Button buttonType='submit' buttonText='Show Issues' onClick={doClick} />
        </Wrapper>
    );
}

const InputContainer = styled.div`
    max-width: 780px;
    margin: 16px auto;
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

export default Showcase;
