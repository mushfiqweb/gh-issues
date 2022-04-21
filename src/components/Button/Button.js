import styled from 'styled-components';

function Button({ children, ...props }) {
    return <StyledButton {...props}><span>{children}</span> </StyledButton>;
}

const StyledButton = styled.button`
    position: relative;
    height: 40px;
    width: 120px;
    background: #2B6397;
    color: #fff;
    font-size: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    cursor:pointer;
    border: 1px solid #008AC8;

    &:disabled {
      background: transparent;
      color: #DDDBDA;
      cursor: not-allowed;
      border: 1px solid #DDDBDA;
      border-radius: 4px;
      box-shadow: none;
      font-size: 16px;
      font-weight: 400;
    }
`;

export default Button;