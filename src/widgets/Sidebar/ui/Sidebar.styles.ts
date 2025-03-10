import { baseTheme } from 'shared/styles/theme';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${baseTheme.sizes.sidebar.width}px;
    gap: 10px;
    min-height: 100vh;
    border-right: 1px solid ${baseTheme.colors.borderLine};
    background-color: ${baseTheme.colors.primary};
    a {
        padding: 5px 0px 5px 20px;
        transition: 0.2s background-color ease; 
    }
    a:hover {
        background-color: #A1A1AA;
    }
`;
