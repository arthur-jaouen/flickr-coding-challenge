import range from 'lodash/range';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common/button';
import { PhotoSearchResults } from 'src/components/photos/photo-search-results';

export interface PhotoSearchInfinitePaginationProps {
    query: string;
    perPage: number;
}

export const LoadMoreButton = styled(Button)`
    margin: ${props => props.theme.dimensions.gap} 0;
`;

export const PhotoSearchInfinitePagination: React.FC<PhotoSearchInfinitePaginationProps> = ({ query, perPage }) => {
    const [pageCount, setPageCount] = useState(1);

    return (
        <>
            {range(1, pageCount + 1).map(page => (
                <PhotoSearchResults key={page} query={query} page={page} perPage={perPage} />
            ))}
            <LoadMoreButton onClick={() => setPageCount(pageCount + 1)}>Load more</LoadMoreButton>
        </>
    );
};
