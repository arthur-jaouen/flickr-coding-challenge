import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Theme } from 'src/styles/theme';

import 'src/styles/default-theme';

export const Div = styled.div`
    color: ${props => props.theme.colors.main};
`;

export const App: React.FC = () => (
    <ThemeProvider theme={Theme}>
        <Div />
    </ThemeProvider>
);

export const AppStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
