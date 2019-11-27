import React, { ReactNode } from 'react';
import ImageLoader from 'react-load-image';
import styled from 'styled-components';

import { LoaderIcon } from 'src/components/common/loader-icon';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: calc(${props => props.theme.dimensions.halfGap} - 1px);
    border: 1px solid #c4c6c9;
    background-color: white;
    box-sizing: border-box;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: calc(${props => props.theme.dimensions.halfSmallGap});
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${props => props.theme.dimensions.halfGap};
    margin-bottom: 0;
    height: 248px;
    overflow: hidden;

    @media screen and (min-width: 1024px) {
        width: 202px;
        height: 184px;
        margin-bottom: ${props => props.theme.dimensions.halfGap};
    }
`;

const Image = styled.img`
    min-width: 100%;
    object-fit: cover;
`;

const Separator = styled.hr`
    margin: calc(${props => props.theme.dimensions.smallGap} + ${props => props.theme.dimensions.halfSmallGap})
        ${props => props.theme.dimensions.halfSmallGap};
    border: 0;
    border-top: 1px solid #c4c6c9;
`;

const Actions = styled.div`
    margin: ${props => props.theme.dimensions.halfSmallGap};

    @media screen and (min-width: 1024px) {
        align-self: flex-end;
    }
`;

export interface CardProps {
    image: string | ReactNode;
    actions?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ image, actions, children }) => (
    <StyledCard>
        <ImageContainer>
            {typeof image === 'string' ? (
                <ImageLoader src={image}>
                    <img />
                    <></>
                    <LoaderIcon />
                </ImageLoader>
            ) : (
                image
            )}
        </ImageContainer>
        <Content>
            {children}
            {actions ? (
                <>
                    <Separator />
                    <Actions>{actions}</Actions>
                </>
            ) : null}
        </Content>
    </StyledCard>
);
