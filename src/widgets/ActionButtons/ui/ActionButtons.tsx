import { FC } from 'react';
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

    const deleteOutlay = async () => {
        try {
            const response = await deleteChosenOutlay({ eID, rID });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ActionButtonsBlock>
            <CreateButtonUI onClick={handleChangeIsActive}>
                <CreateIcon />
            </CreateButtonUI>
            <DeleteButtonUI onClick={deleteOutlay}><DeleteIcon /></DeleteButtonUI>
        </ActionButtonsBlock>
    );
};
