declare module 'flickr-sdk' {
    export default class Flickr {
        constructor(key: string);

        public photos: Photos;
    }

    /* GENERAL */

    export type Search = {
        page?: number;
        per_page?: number;
    };

    export type Response<T> = {
        body: Body & T;
    };

    export type Body = { stat: 'ok' };

    export type ListResult = {
        page: number;
        pages: number;
        perpage: number;
    };

    /* PHOTOS */

    export interface Photos {
        search(params: PhotosSearchParams): Promise<PhotosSearchResponse>;
    }

    export type Photo = {
        farm: number;
        id: string;
        isfamily: number;
        isfriend: number;
        ispublic: number;
        owner: string;
        secret: string;
        server: string;
        title: string;
    };

    export type PhotosSearchParams = Search & {
        tags?: string[];
    };

    export type PhotosSearchResponse = Response<{ photos: ListResult & { photo: Photo[] } }>;
}
