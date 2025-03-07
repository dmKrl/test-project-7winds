import { FC, useState } from 'react';
import CreateIcon from 'widgets/assets/icons/create-icon.svg';
import DeleteIcon from 'widgets/assets/icons/delete-icon.svg';
import { OutlayAPI } from 'features/services/OutlayService';
import { useAppSelector } from 'features/hooks/redux';
import { ActionButtonsBlock, CreateButtonUI, DeleteButtonUI } from './ActionButtons.styles';

interface ActionButtonsProps {
    rID: number;
    handleChangeIsActive: () => void;
}

export const ActionButtons: FC<ActionButtonsProps> = ({ rID, handleChangeIsActive }) => {
    const [deleteChosenOutlay] = OutlayAPI.useDeleteChosenOutlayMutation();
    const { eID } = useAppSelector((state) => state.outlayReducer);
    const [isHovered, setIsHovered] = useState(false);

    const deleteOutlay = async () => {
        try {
            await deleteChosenOutlay({ eID, rID });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ActionButtonsBlock
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            isHovered={isHovered}
        >
            <CreateButtonUI onClick={handleChangeIsActive}>
                <CreateIcon />
            </CreateButtonUI>
            <DeleteButtonUI
                style={{ opacity: isHovered ? 1 : 0 }}
                onClick={deleteOutlay}>
                <DeleteIcon />
            </DeleteButtonUI>
        </ActionButtonsBlock>
    );
};
