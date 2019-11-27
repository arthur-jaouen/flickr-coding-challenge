import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    height: ${props => props.theme.dimensions.inputHeight};
    margin: 0;
    padding: ${props => props.theme.dimensions.inputPadding} ${props => props.theme.dimensions.gap};
    border: 0;
    border-radius: ${props => props.theme.dimensions.borderRadius};
    background-color: #00afd7;
    color: white;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        background-color: #10bfe7;
    }

    &:pressed {
        background-color: #009fc7;
    }

    &:disabled {
        background-color: #c4c6c9;
    }
`;
