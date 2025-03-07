import { baseTheme } from 'shared/styles/theme';
import { TextItemUI } from 'shared/ui/TextItem/TextItem.styles';
import styled, { css } from 'styled-components';

export const InfobarContainer = styled.div`
    display: flex;
    padding: 0px 10px;
    border-bottom: 1px solid ${baseTheme.colors.borderLine};
    height: 41px;
`;

export const InfobarContainerBlockLeft = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const InfobarContainerBlockRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const InfobarText = css`
    ${TextItemUI};
    color: ${baseTheme.colors.fontBlur};
`;

export const TextLevel = styled.p`
    ${InfobarText};
    width: 6.25rem;
`;

export const TextNameWork = styled.p`
    ${InfobarText};
    min-width: 44.313rem;
`;

export const TextSalary = styled.p`
    ${InfobarText};
    width: 12.5rem;
`;

export const TextDevices = styled.p`
    ${InfobarText};
    width: 12.5rem;
`;

export const TextOverheads = styled.p`
    ${InfobarText};
    width: 12.5rem;
`;

export const TextProfit = styled.p`
    ${InfobarText};
    width: 12.5rem;
`;
