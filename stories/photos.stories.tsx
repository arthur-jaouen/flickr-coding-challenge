import { useState } from '@storybook/addons';
import { storiesOf } from '@storybook/react';
import { Photo } from 'flickr-sdk';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'src/app';
import { Button } from 'src/components/common/button';
import { PhotoCard, PhotoCardPlaceholder, PhotoCardView } from 'src/components/photos/photo-card';
import { PhotoSearchForm } from 'src/components/photos/photo-search-form';
import { PhotoSearchResults } from 'src/components/photos/photo-search-results';
import { Theme } from 'src/theme/theme';

const photo: Photo = {
    id: '49133027098',
    owner: '29715208@N02',
    secret: '2eddd491b5',
    server: '65535',
    farm: 66,
    title: "46100 'Royal Scot', Stafford",
    ispublic: 1,
    isfriend: 0,
    isfamily: 0
};

storiesOf('Photos', module)
    .addDecorator(children => (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {children()}
        </ThemeProvider>
    ))
    .add('Photo', () => <PhotoCard {...photo} />)
    .add('Photo (static)', () => (
        <PhotoCardView
            image="https://farm66.staticflickr.com/65535/49133027098_2eddd491b5.jpg"
            title="46100 'Royal Scot', Stafford"
            owner="JH Stokes"
            date="27 November 2019"
            actions={<Button disabled>View large image</Button>}
        />
    ))
    .add('Photo (placeholder)', () => <PhotoCardPlaceholder />)
    .add('List', () => <PhotoSearchResults query="test" page={1} perPage={10} />)
    .add('Search form', () => {
        const [query, setQuery] = useState('');

        return <PhotoSearchForm query={query} onChange={setQuery} />;
    });
