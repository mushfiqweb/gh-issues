import styled from 'styled-components';

function TextInput({ onChange, value, placeholder, name }) {
    return (
        <Wrapper>
            <svg className='svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
            </svg>
            <input
                name={name}
                type='text'
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

export default TextInput;
