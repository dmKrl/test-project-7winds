import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import CreateIcon from 'widgets/assets/icons/create-icon.svg';
import DeleteIcon from 'widgets/assets/icons/delete-icon.svg';
import { ActionButtonsBlock, CreateButtonUI, DeleteButtonUI } from './ActionButtons.styles';

interface ActionButtonsProps {
}

export const ActionButtons: FC<ActionButtonsProps> = (props) => {
    return (
        <ActionButtonsBlock className='actionButtons'>
            <CreateButtonUI><CreateIcon /></CreateButtonUI>
            <DeleteButtonUI><DeleteIcon /></DeleteButtonUI>
        </ActionButtonsBlock>
    );
};
