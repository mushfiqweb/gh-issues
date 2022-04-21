import styled from 'styled-components';

function Body({ children, style }) {
    return (
        <Wrapper style={style}>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.main`
    width: 100%;
`;

export default Body;
