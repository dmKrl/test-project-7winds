import styled from 'styled-components';
import { baseTheme } from 'shared/styles/theme';
import { TextItemUI } from '../TextItem.styles';

export const TextItemGrayUI = styled.p`
    ${TextItemUI};
    color: ${baseTheme.colors.fontBlur};
`;
