declare module 'flickr-sdk' {
    import { Request, Response } from 'superagent';

        export default class Flickr {
        constructor(key: string);

        public photos: Photos;
    }

    /* GENERAL */

    export interface FlickrRequest<T> extends Promise<FlickrResponse<T>>, Request {}

    export interface FlickrResponse<T> extends Response {
        body: FlickrBody & T;
    }

    export interface FlickrBody {
        stat: 'ok';
    }

    export interface SearchParams {
        page: number;
        per_page: number;
    }

    export interface ListResult {
        page: number;
        pages: number;
        perpage: number;
    }

    /* USER */

    export interface User {
        nsid: string;
        realname: string;
        username: string;
    }

    /* PHOTOS */

    export interface Photos {
        search(params: PhotoSearchParams): FlickrRequest<{ photos: PhotoListResult }>;
        getInfo(params: { photo_id: string; secret: string }): FlickrRequest<{ photo: PhotoInfo }>;
    }

    export interface Photo {
        farm: number;
        id: string;
        isfamily: number;
        isfriend: number;
        ispublic: number;
        owner: string;
        secret: string;
        server: string;
        title: string;
    }

    export interface PhotoInfo extends Photo {
        dates: {
            posted: string;
        };
        owner: User;
    }

    export interface PhotoSearchParams extends SearchParams {
        tags?: string[];
    }

    export interface PhotoListResult extends ListResult {
        photo: Photo[];
    }
}
