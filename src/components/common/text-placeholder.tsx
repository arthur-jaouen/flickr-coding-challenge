import random from 'lodash/random';
import range from 'lodash/range';
import React from 'react';
import styled from 'styled-components';

export interface TextPlaceholderProps {
    lines?: number;
    length?: (() => number) | number;
}

const TextPlaceholderLine = styled.span<{ length: (() => number) | number }>`
    display: block;
    width: ${({ length }) => (typeof length === 'number' ? length : length())}%;
    margin: ${props => props.theme.dimensions.halfSmallGap} 0;
    height: 16px;
    background: #c4c6c9;
`;

export const TextPlaceholder: React.FC<TextPlaceholderProps> = ({ lines, length }) => (
    <>
        {range(0, lines || 1).map(i => (
            <TextPlaceholderLine key={i} length={length || (() => random(60, 95, false))}>
                &nbsp;
            </TextPlaceholderLine>
        ))}
    </>
);
