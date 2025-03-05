import { baseTheme } from 'shared/styles/theme';
import styled from 'styled-components';

export const AppContainer = styled.div`
    min-height: 100vh;
    color: ${baseTheme.colors.font};
    font-size: 30px;
    background-color: ${baseTheme.colors.secondary};
`;

export const ContentPage = styled.div`
    display: flex;
`;

export const PageWrapper = styled.div`
    flex-grow: 1;
    padding: 20px;
    background-color: ${baseTheme.colors.secondary};
`;
