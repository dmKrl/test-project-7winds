import { baseTheme } from 'shared/styles/theme';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    ${baseTheme.sizes.header};
    background-color: ${baseTheme.colors.primary};
    border-bottom: 1px solid #414144;
`;
