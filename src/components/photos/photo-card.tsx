import { Photo, PhotoInfo } from 'flickr-sdk';
import moment from 'moment';
import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/common/button';
import { Card } from 'src/components/common/card';
import { LoaderIcon } from 'src/components/common/loader-icon';
import { TextPlaceholder } from 'src/components/common/text-placeholder';
import { getPhotoInfo } from 'src/flickr/photos';

const Description = styled.p`
    flex-basis: 0;
    flex-grow: 1;
    line-height: 24px;
    font-size: ${props => props.theme.dimensions.fontSize};
    margin: 4px;

    @media screen and (min-width: 1024px) {
        margin: 4px 8px;
    }
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`;

const Action = styled(Button)`
    @media screen and (min-width: 1024px) {
        width: auto;
    }
`;

interface PhotoCardTemplateProps {
    image: string | ReactNode;
    title: string | ReactNode;
    owner: string | ReactNode;
    date: string | ReactNode;
    actions?: ReactNode;
}

const PhotoCardTemplate: React.FC<PhotoCardTemplateProps> = ({ image, title, owner, date, actions }) => (
    <Card image={image} actions={actions}>
        <Description>
            <b>Title</b>
            <br />
            {title}
        </Description>

        <Infos>
            <Description>
                <b>Owner name</b>
                <br />
                {owner}
            </Description>
            <Description>
                <b>Date</b>
                <br />
                {date}
            </Description>
        </Infos>
    </Card>
);

export const PhotoCard: React.FC<Photo> = photo => {
    const [photoInfo, setPhotoInfo] = useState<PhotoInfo | null>(null);

    useEffect(() => {
        const { response, abort } = getPhotoInfo(photo);

        response.then(setPhotoInfo);

        return abort;
    }, [photo.id]);

    return (
        <PhotoCardTemplate
            image={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            title={photo.title.length ? photo.title : '-'}
            owner={photoInfo ? photoInfo.owner.username : <TextPlaceholder length={50} />}
            date={
                photoInfo ? (
                    moment(parseInt(photoInfo.dates.posted, 10) * 1000).format('DD MMMM YYYY')
                ) : (
                    <TextPlaceholder length={20} />
                )
            }
            actions={
                <Action
                    onClick={() => {
                        const win = window.open(`https://www.flickr.com/photos/${photo.owner}/${photo.id}`, '_blank');
                        win && win.focus();
                    }}
                >
                    View large image
                </Action>
            }
        />
    );
};

export const PhotoCardPlaceholder: React.FC = () => {
    return (
        <PhotoCardTemplate
            image={<LoaderIcon />}
            title={<TextPlaceholder length={90} />}
            owner={<TextPlaceholder length={50} />}
            date={<TextPlaceholder length={20} />}
            actions={<Action disabled={true}>View large image</Action>}
        />
    );
};
