import styled from 'styled-components';
import classNames from 'classnames';

function TextInput({ onChange, value, placeholder, name, invalid, isTouched, inputLabel }) {


    const cssClasses = classNames({
        'valid-border': true,
        'error-border': invalid ? true : false,
    });
    return (
        <Wrapper>
            <div className='owner-repo'>
                <div className="owner">
                    <label htmlFor={inputLabel}>
                        {inputLabel} <span>*</span>
                    </label>
                    <br />
                    <input
                        className={cssClasses}
                        type="text"
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                    {
                        !invalid && isTouched && <span className="valid-mark">✔</span>
                    }
                    {
                        invalid && <p className="required">This field is required</p>
                    }

                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    label {
        color: #FFF;
    }

    label span{
        color: red;
    }

    input {
        height: 65px;
        width: 340px;
        background: #4140436b;
        border: 0;
        border-radius: 12px;
        padding: 0px 25px 0 15px;
        font-size: 20px;
        color: #ffff;
        margin: 15px 0px;
    }
    .valid-border:focus {
        outline: none;
        border: 1px solid #3267F0;
        box-shadow: 1px 0px 17px -2px rgba(50,103,240,0.75);
        -webkit-box-shadow: 1px 0px 17px -2px rgba(50,103,240,0.75);
        -moz-box-shadow: 1px 0px 17px -2px rgba(50,103,240,0.75);
    }
    .error-border:focus {
        outline: none;
        border: 1px solid #FF0000;
        box-shadow: 1px 0px 17px -2px #FF0000;
        -webkit-box-shadow: 1px 0px 17px -2px #FF0000;
        -moz-box-shadow: 1px 0px 17px -2px #FF0000;
    }
    input:focus::after {
        content: "";
        color: green;
    }
`;

export default TextInput;
