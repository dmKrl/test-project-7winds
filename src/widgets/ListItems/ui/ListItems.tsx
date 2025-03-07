import { useAppSelector } from 'features/hooks/redux';
import { ListFormCreate } from 'widgets/ListForm';
import { ListItem } from 'widgets/ListItem';
import { ListItemsUI } from './ListItems.styles';

export const ListItems = () => {
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
