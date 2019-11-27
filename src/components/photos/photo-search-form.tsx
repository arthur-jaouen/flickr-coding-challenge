import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

import { Button } from 'src/components/common/button';
import { TextInput } from 'src/components/common/text-input';

const StyledPhotoSearchForm = styled.form`
    display: flex;
    margin: ${props => props.theme.dimensions.gap} 0;
`;

const LabelIcon = styled.label`
    padding: calc(${props => props.theme.dimensions.inputPadding} - 1px);
    padding-right: 0;
    border: 1px solid #c4c6c9;
    border-right: 0;
    border-top-left-radius: ${props => props.theme.dimensions.borderRadius};
    border-bottom-left-radius: ${props => props.theme.dimensions.borderRadius};
    background-color: white;
    cursor: text;

    svg {
        display: block;
    }
`;

const SearchInput = styled(TextInput)`
    flex-grow: 1;
    border-left: 0;
    border-right: 0;

    &:focus {
        outline: 0;
    }

    &::placeholder {
        color: #c4c6c9;
    }
`;

const Submit = styled(Button)`
    width: auto;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`;

export type PhotoSearchFormProps = {
    query: string;
    onChange: (query: string) => void;
};

export const PhotoSearchForm: React.FC<PhotoSearchFormProps> = ({ query, onChange }) => (
    <StyledPhotoSearchForm
        onSubmit={evt => {
            evt.preventDefault();
            onChange(query);
        }}
    >
        <LabelIcon htmlFor="search-input">
            <FaSearch color="c4c6c9" />
        </LabelIcon>
        <SearchInput
            id="search-input"
            type="search"
            placeholder="Search..."
            value={query}
            onChange={evt => onChange(evt.currentTarget.value)}
        />
        <Submit type="submit">Search</Submit>
    </StyledPhotoSearchForm>
);
