import React, { Component, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from '../utilities/utileties';
import { GlobalStyles } from './global';
import Toggle from './ToggleTheme/ToggleTheme';

import Layout from './Layout';
import Tabs from './Tabs/Tabs';
import tabs from '../tabs.json';

function App() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />

                <Layout>
                    <Tabs items={tabs} />
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                </Layout>
            </>
        </ThemeProvider>
    );
}
export default App;
