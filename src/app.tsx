import React, { useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { PhotoSearchPage } from 'src/components/photos/photo-search-page';
import { LaptopTheme } from 'src/theme/laptop-theme';
import { Theme } from 'src/theme/theme';

import 'src/definitions/default-theme';
import 'src/definitions/flickr-sdk';
import 'src/definitions/react-load-image';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu.woff2) format('woff2')
    }
    
    @keyframes spin {
        100% { 
            transform:rotate(360deg); 
        } 
    }

    html, body, #root {
        margin: 0;
        width: 100%; 
        height: 100%;
        background-color: #f4f6f9;
    }
    
    body, input, button {
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const App: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });
    return (
        <ThemeProvider theme={width < 1024 ? Theme : LaptopTheme}>
            <GlobalStyle />
            <PhotoSearchPage />
        </ThemeProvider>
    );
};
