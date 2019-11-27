import React from 'react';

import 'react-load-image';

declare module 'react-load-image' {
    export interface ImageLoaderProps {
        src: string;
    }

    export default interface ImageLoader extends React.ComponentType<ImageLoaderProps> {}
}
