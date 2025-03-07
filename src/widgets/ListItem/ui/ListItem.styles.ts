import { baseTheme } from 'shared/styles/theme';
import styled from 'styled-components';

export const ListItemUI = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ListItemWrapperUI = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${baseTheme.colors.borderLine};
    padding: 10px 0px;
    gap: 10px;
`;

export const ListItemWrapperChildUI = styled.div`
    margin-left: 10px;
`;
