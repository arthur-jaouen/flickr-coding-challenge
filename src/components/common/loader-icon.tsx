import { FaCircleNotch } from 'react-icons/fa';
import styled from 'styled-components';

export const LoaderIcon = styled(FaCircleNotch)`
    width: ${props => props.theme.dimensions.loaderSize};
    height: ${props => props.theme.dimensions.loaderSize};
    animation: spin 1s linear infinite;
    color: #c4c6c9;
`;
