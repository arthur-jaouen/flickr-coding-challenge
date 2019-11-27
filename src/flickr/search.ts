import { useEffect, useState } from 'react';

export enum REQUEST_STATE {
    Idle,
    Fetching,
    Success,
    Error
}

export interface RequestStatus {
    requestState: REQUEST_STATE;
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
    response: Promise<T>;
    abort: () => void;
};

export function useSearchRequest<T>(
    request: SearchRequest<T>,
    params: SearchParams,
    onSuccess: (result: T) => void
): RequestStatus {
    const [status, setStatus] = useState<RequestStatus>({
        requestState: REQUEST_STATE.Idle,
        error: null
    });

    useEffect(() => {
        setStatus({
            requestState: REQUEST_STATE.Fetching,
            error: null
        });

        const { response, abort } = request(params);

        response
            .then(result => {
                onSuccess(result);
                setStatus({
                    requestState: REQUEST_STATE.Success,
                    error: null
                });
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    if (error.status === 200) {
                        setStatus({
                            requestState: REQUEST_STATE.Error,
                            error: error.message
                        });
                    } else {
                        setStatus({
                            requestState: REQUEST_STATE.Error,
                            error: 'A network error occurred, please check your connection'
                        });
                    }
                }
            });

        return abort;
    }, [params.query, params.page, params.perPage]);

    return status;
}
