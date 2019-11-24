import { Photo, PhotosSearchParams } from 'flickr-sdk';
import React from 'react';

import { FetchState, useFlickr } from 'src/flickr/fetch';

export const DisplayPhotos: React.ComponentType<FetchState<Photo[]>> = ({ data, fetching }) => (
    <ul>
        {data.map(photo => (
            <li>{photo.id}</li>
        ))}
    </ul>
);

export const searchPhotos = useFlickr<Photo[], PhotosSearchParams>(
    (flickr, params) => flickr.photos.search(params).then(response => response.body.photos.photo),
    []
);
