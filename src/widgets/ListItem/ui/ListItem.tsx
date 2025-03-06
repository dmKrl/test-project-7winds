import { useAppSelector } from 'features/hooks/redux';
import { IOutlay } from 'features/store/models/IOutlay';
import { ListForm } from 'widgets/ListForm';
import { FC, useState } from 'react';
import { ActionButtons } from 'widgets/ActionButtons/ui/ActionButtons';
import { ListItemUI } from './ListItem.styles';

interface ListItemProps {
    outlays: IOutlay[],
}

export const ListItem: FC<ListItemProps> = (props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const { outlays } = props;

    return (
        <ListItemUI>
            <ActionButtons />
            {isEdit
                ? (
                    <div>
                        Some Text
                    </div>
                ) : (
                    <ListForm />
                )}
        </ListItemUI>
    );
};
