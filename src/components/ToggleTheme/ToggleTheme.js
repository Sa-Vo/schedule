import React from 'react';
import { func, string } from 'prop-types';
import { ToggleContainer } from './Toggle.styled';

const Toggle = ({ theme, toggleTheme }) => {
    const islLight = theme === 'light';
    return (
        <ToggleContainer onClick={toggleTheme}>
            <h1>{theme === 'light' ? 'light' : 'dark'}</h1>
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
};

export default Toggle;
