import Flickr, { Photo } from 'flickr-sdk';
import { useState } from 'react';

import { SearchParams, SearchRequest, useSearchRequest } from 'src/flickr/search';

export const flickr = new Flickr('6fcba0c64275dce070163440b75e62ad');

export const searchPhotos: SearchRequest<Photo[]> = (params: SearchParams) => {
    const request = flickr.photos.search({
        tags: [params.query],
        page: params.page,
        per_page: params.perPage
    });

    return { response: request.then(response => response.body.photos.photo), abort: () => request.abort() };
};

export function usePhotoSearch(query: string, page: number, perPage: number) {
    const [photos, setPhotos] = useState<Photo[]>([]);

    const status = useSearchRequest(searchPhotos, { query, page, perPage }, setPhotos);

    return {
        photos,
        status
    };
}

export function getPhotoInfo(photo: Photo) {
    const request = flickr.photos.getInfo({ photo_id: photo.id, secret: photo.secret });

    return { response: request.then(response => response.body.photo), abort: () => request.abort() };
}
