import styled from 'styled-components';

export const ToggleContainer = styled.button`
    background: ${({ theme }) => theme.btnToggle};
    border: none;
    /* border: 2px solid ${({ theme }) => theme.toggleBorder}; */
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.5rem;
    margin: 5px 1em 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    width: 8rem;
    height: 4rem;
    outline: none;

    h1 {
        color: ${({ theme }) => theme.btnToggleColor};
        font-size: 2rem;
        margin: 0 auto;
    }
`;
