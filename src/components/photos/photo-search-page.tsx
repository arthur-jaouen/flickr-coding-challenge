import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Info } from 'src/components/common/messages';
import { PhotoSearchForm } from 'src/components/photos/photo-search-form';
import {
    PhotoSearchInfinitePagination
} from 'src/components/photos/photo-search-infinite-pagination';

const StyledPhotoSearchPage = styled.div`
    flex-direction: column;
    width: 320px;
    margin: auto;
    padding: 8px;
    box-sizing: border-box;

    @media screen and (min-width: 1024px) {
        width: 1024px;
    }
`;

function useDebounce(value: any, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
}

export const PhotoSearchPage: React.FC = () => {
    const [query, setQuery] = useState('');

    const debouncedQuery = useDebounce(query, 300);

    return (
        <StyledPhotoSearchPage>
            <PhotoSearchForm
                query={query}
                onChange={query => {
                    setQuery(query);
                }}
            />
            {debouncedQuery === '' ? (
                <Info>Please enter a search query</Info>
            ) : (
                <PhotoSearchInfinitePagination key={debouncedQuery} query={debouncedQuery} perPage={10} />
            )}
        </StyledPhotoSearchPage>
    );
};
