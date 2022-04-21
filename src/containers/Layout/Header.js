import styled from 'styled-components';
import { yoursLogo } from 'assets/img';
import { useHistory } from 'react-router-dom';


function Header({ style, onLogoClick }) {
    const history = useHistory();

    const handleLogoClick = () => {
        if (onLogoClick) {
            onLogoClick();
        } else {
            history.push('/');
        }
    };

    return (
        <Wrapper style={style}>
            <img
                title='Yours'
                className="main-logo"
                src={yoursLogo}
                alt="Yours"
                onClick={handleLogoClick}
            />
        </Wrapper>
    );
}

const Wrapper = styled.header`
    width: 100%;
    height: 150px;

    .main-logo {
        width: 150px;
        cursor: pointer;
        position: absolute;
        left: 8.8%;
        top: 5.14%;
    }
`;


export default Header;
