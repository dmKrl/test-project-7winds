import { useAppSelector } from 'features/hooks/redux';
import { FC } from 'react';
import { ListForm } from 'widgets/ListForm';
import { ListItem } from 'widgets/ListItem';
import { ListItemsUI } from './ListItems.styles';

interface ListItemsProps {
}

export const ListItems: FC<ListItemsProps> = (props) => {
    const { outlays } = useAppSelector((state) => state.outlayReducer);

    return (
        <ListItemsUI>
            {outlays.length ? outlays.map(() => {
                return (<ListItem outlays={outlays} />);
            })
                : <ListItem outlays={outlays} />}
        </ListItemsUI>
    );
};
