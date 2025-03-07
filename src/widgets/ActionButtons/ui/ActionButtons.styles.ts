import { baseTheme } from 'shared/styles/theme';
import { ButtonUI } from 'shared/ui/Button/Button.styles';
import styled from 'styled-components';

interface IActionButtons {
    isHovered: boolean;
}

export const ActionButtonsBlock = styled.div<IActionButtons>`
    border-radius: 6px;
    padding: 2px;
    transition: 0.2s background-color ease;
    background-color: ${(props) => (props.isHovered
        ? baseTheme.colors.borderLine
        : '#202124')}; 
    min-width: 52px;
`;

export const DeleteButtonUI = styled(ButtonUI)`
    opacity: 0;
    transition: 0.2s opacity ease; 
`;

export const CreateButtonUI = styled(ButtonUI)`
`;
