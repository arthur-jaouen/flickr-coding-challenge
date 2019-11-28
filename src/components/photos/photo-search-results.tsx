import range from 'lodash/range';
import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import { Error, Info } from 'src/components/common/messages';
import { PhotoCard, PhotoCardPlaceholder } from 'src/components/photos/photo-card';
import { searchPhotos } from 'src/flickr/photos';
import { REQUEST_STATE, useSearchRequest } from 'src/flickr/search';

const StyledPhotoSearchResults = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 -${props => props.theme.dimensions.gap};
`;

const PhotoCardContainer = styled.div`
    margin: ${props => props.theme.dimensions.gap};
`;

export interface PhotoSearchResultsProps {
    query: string;
    page: number;
    perPage: number;
}

export const PhotoSearchResults: React.FC<PhotoSearchResultsProps> = ({ query, page, perPage }) => {
    const { results, state, error } = useSearchRequest(searchPhotos, { query, page, perPage });

    return state === REQUEST_STATE.Error ? (
        <Error>Error : {error}</Error>
    ) : state === REQUEST_STATE.Fetching ? (
        <StyledPhotoSearchResults>
            {range(0, perPage).map(i => (
                <PhotoCardContainer key={i}>
                    <PhotoCardPlaceholder />
                </PhotoCardContainer>
            ))}
        </StyledPhotoSearchResults>
    ) : (
        <StyledPhotoSearchResults>
            {results.length > 0 ? (
                results.map(photo => (
                    <LazyLoad key={photo.id} height={553} once={true} offset={600}>
                        <PhotoCardContainer>
                            <PhotoCard {...photo} />
                        </PhotoCardContainer>
                    </LazyLoad>
                ))
            ) : (
                <Info>No results</Info>
            )}
        </StyledPhotoSearchResults>
    );
};
