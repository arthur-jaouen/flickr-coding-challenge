import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        dimensions: {
            gap: string;
            halfGap: string;
            smallGap: string;
            halfSmallGap: string;
            inputPadding: string;
            inputHeight: string;
            borderRadius: string;
            loaderSize: string;
            fontSize: string;
        };
        colors: {
            main: string;
            secondary: string;
        };
    }
}
