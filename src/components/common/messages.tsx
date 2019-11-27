import styled from 'styled-components';

export const Info = styled.p`
    margin: ${props => props.theme.dimensions.gap} 0;
    color: #c4c6c9;
    text-align: center;
`;

export const Error = styled.p`
    margin: ${props => props.theme.dimensions.gap} 0;
    padding: ${props => props.theme.dimensions.gap};
    color: #c4c6c9;
    text-align: center;
    border: 1px solid #fe5e55;
    color: #fe5e55;
    background-color: #ffedeb;
`;
