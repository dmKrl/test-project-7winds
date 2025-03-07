import { useAppSelector } from 'features/hooks/redux';
import { FC } from 'react';
import { ListFormCreate } from 'widgets/ListForm';
import { ListItem } from 'widgets/ListItem';
import { ListItemsUI } from './ListItems.styles';

interface ListItemsProps {
}

export const ListItems: FC<ListItemsProps> = (props) => {
    const { outlays } = useAppSelector((state) => state.outlayReducer);

    return (
        <ListItemsUI>
            {outlays?.length ? outlays.map((outlay) => {
                return (<ListItem key={outlay.id} outlay={outlay} />);
            })
                : <ListFormCreate />}
        </ListItemsUI>
    );
};
