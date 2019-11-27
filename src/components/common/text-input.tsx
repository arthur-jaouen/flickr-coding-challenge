import styled from 'styled-components';

export const TextInput = styled.input`
    width: 100%;
    height: ${props => props.theme.dimensions.inputHeight};
    margin: 0;
    padding: calc(${props => props.theme.dimensions.inputPadding} - 1px);
    border: 1px solid #c4c6c9;
    box-sizing: border-box;
    font-size: 14px;
`;
