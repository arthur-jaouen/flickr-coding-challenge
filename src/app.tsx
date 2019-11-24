import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { DisplayPhotos, searchPhotos } from 'src/components/photos';
import { Theme } from 'src/theme/theme';

import 'src/theme/default-theme';

const Div = styled.div`
    color: ${props => props.theme.colors.main};
`;

const defaultParams = { per_page: 10, tags: ['test'] };

export const App = () => {
    const [params, setParams] = useState(defaultParams);
    const { data, fetching } = searchPhotos(params);

    return (
        <ThemeProvider theme={Theme}>
            <Div>
                <DisplayPhotos data={data} fetching={fetching} />
            </Div>
        </ThemeProvider>
    );
};

export const AppStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`;
