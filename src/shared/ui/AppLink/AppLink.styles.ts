import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppLinkUI = styled(Link)`
    display: flex;
    align-items: center;
    gap: 14px;
    color: white;
    transition: 0.2s opacity ease;   
    color: #FFF;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: normal; 
    position: relative;
    background-image: url(underlineImg);
    :hover {
        opacity: 0.8;
    }
    :focus {
        opacity: 0.5;
    }
`;
