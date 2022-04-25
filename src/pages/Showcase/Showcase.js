import styled from 'styled-components';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import { useForm } from "react-hook-form";
import classNames from 'classnames';


function Showcase() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleInputChange = (e) => {
        console.log(e.target.value);
    }

    const doClick = () => {
        alert('clicked');
    }

    const onSubmit = data => console.log(data);

    const cssClasses = classNames({
        'valid-border': true,
        'error-border': errors ? true : false,
    });

    return (
        <Wrapper>
            <InputContainer>
                <TextInput placeholder='Repository Owner' name='owner' onChange={handleInputChange} />
                <TextInput placeholder='Repository Name' name='repo' onChange={handleInputChange} />
            </InputContainer>
            <Button buttonType='submit' buttonText='Show Issues' onClick={doClick} />
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='owner-repo'>
                    <div className="owner">
                        <label htmlFor="owner">
                            Owner <span>*</span>
                        </label>
                        <br />
                        <input
                            {...register("owner", { required: true })}
                            className={cssClasses}
                            placeholder='Repo Owner'

                        />

                    </div>
                </div>

                <input {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "First name is required"}

                <input {...register("lastName", { required: true })} />
                {errors.lastName && "Last name is required"}

                <input type="submit" />
            </form>
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
