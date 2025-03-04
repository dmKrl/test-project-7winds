import { baseTheme } from 'shared/styles/theme';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 20px;
    height: ${baseTheme.sizes.navbar.height}px;
    border-bottom: 1px solid #414144;

`;
