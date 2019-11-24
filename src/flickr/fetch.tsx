import Flickr from 'flickr-sdk';
import { useEffect, useState } from 'react';

import 'src/flickr/flickr-sdk';

export const flickr = new Flickr('6fcba0c64275dce070163440b75e62ad');

export type FetchState<T> = {
    data: T;
    fetching: boolean;
};

export function useFlickr<T, P extends {}>(
    fetchData: (flickr: Flickr, params: P) => Promise<T>,
    initialData: T
): (params: P) => FetchState<T> {
    return params => {
        const [state, setState] = useState({ data: initialData, fetching: false });

        useEffect(() => {
            setState({ data: state.data, fetching: true });
            fetchData(flickr, params)
                .then(data => setState({ data, fetching: false }))
                .catch(e => {
                    console.log(e);
                    setState({ data: state.data, fetching: false });
                });
        }, [params]);

        return state;
    };
}
