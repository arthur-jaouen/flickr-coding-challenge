import { useEffect, useState } from 'react';

export enum REQUEST_STATE {
    Idle,
    Fetching,
    Success,
    Error
}

export interface SearchResponse<T> {
    results: T[];
    state: REQUEST_STATE;
    error: string | null;
}

export interface SearchParams {
    query: string;
    page: number;
    perPage: number;
}

export type SearchRequest<T> = (
    params: SearchParams
) => {
    response: Promise<T[]>;
    abort: () => void;
};

export function useSearchRequest<T>(request: SearchRequest<T>, params: SearchParams): SearchResponse<T> {
    const [response, setResponse] = useState<SearchResponse<T>>({
        results: [],
        state: REQUEST_STATE.Idle,
        error: null
    });

    useEffect(() => {
        setResponse({
            results: [],
            state: REQUEST_STATE.Fetching,
            error: null
        });

        const { response, abort } = request(params);

        response
            .then(results => {
                setResponse({
                    results,
                    state: REQUEST_STATE.Success,
                    error: null
                });
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setResponse({
                        results: [],
                        state: REQUEST_STATE.Error,
                        error:
                            error.status === 200
                                ? error.message
                                : 'A network error occurred, please check your connection'
                    });
                }
            });

        return abort;
    }, [params.query, params.page, params.perPage]);

    return response;
}
