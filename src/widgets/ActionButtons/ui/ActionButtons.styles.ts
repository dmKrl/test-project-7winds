import { baseTheme } from 'shared/styles/theme';
import { Button } from 'shared/ui/Button/Button';
import styled from 'styled-components';

export const ActionButtonsBlock = styled.div`
    border-radius: 6px;
    padding: 2px;
    background: none;
    min-width: 52px;
    .actionButtons:has(> .button:hover) {
    }
`;

export const DeleteButtonUI = styled(Button)`
    opacity: 0;
`;

export const CreateButtonUI = styled(Button)`
    :hover .actionButtons {
        background: ${baseTheme.colors.borderLine};
    }
`;
