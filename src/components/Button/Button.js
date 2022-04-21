import styled from 'styled-components';

function Button({ buttonType, buttonText, onClick }) {
  return <StyledButton >
    <button type={buttonType} onClick={onClick} >{buttonText}</button>
  </StyledButton>;
}

const StyledButton = styled.div`
  text-align: center;
  margin-top: 30px;
  
  button {
    background: #9a41ea;
    border-radius: 7px;
    color: #ffff;
    padding: 15px 42px;
    font-size: 14px;
    font-weight: 600;
    border: 0;
    cursor: pointer;
    width: 170px;
  }
`;

export default Button;