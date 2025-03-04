import { baseTheme } from 'shared/styles/theme';
import styled from 'styled-components';

export const TopbarContainer = styled.div`
    display: flex;
    height: ${baseTheme.sizes.navbar.height}px;
`;

export const TopbarContentBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${baseTheme.sizes.navbar.height}px;
    border-right: 1px solid #414144;
    padding: 10px;
`;

export const TopbarText = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${baseTheme.sizes.navbar.height}px;
    color: #A1A1AA;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    span { 
        font-size: 10px;
    }
`;

export const TopbarTitle = styled.h3`
    color: #FFF;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
`;
