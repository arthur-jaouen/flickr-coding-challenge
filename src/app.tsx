import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Theme } from 'src/theme/theme';

import 'src/theme/default-theme';

export const Div = styled.div`
    color: ${props => props.theme.colors.main};
`;

export const App: React.FC = props => (
    <ThemeProvider theme={Theme}>
        <Div>Hello world</Div>
    </ThemeProvider>
);

export const AppStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
