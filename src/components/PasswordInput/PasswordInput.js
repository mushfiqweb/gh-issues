import styled from 'styled-components';
import { secretImage } from 'assets/img';
function PasswordInput({ onChange, value, placeholder, name }) {
  return (
    <Wrapper>
      <img className='svg' src={secretImage} alt='password' />
      <input
        name={name}
        type='password'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </Wrapper>
  );
}

const Wrapper = styled.fieldset`
    margin: 8px;
    background-color: #eceef1;
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 3px;
    padding: 5px;
    .svg {
      width: 30px;
      height: 30px;
      color: #000;
    }
    input {
      border: 0;
      background-color: #eceef1;
      padding-left: 10px;
      outline: none;
      font-size: 15px;
      :focus {
        outline: none;
      }
    } 
`;


export default PasswordInput;
