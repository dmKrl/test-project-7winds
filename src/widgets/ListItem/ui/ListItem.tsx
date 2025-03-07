import { IOutlay } from 'features/store/models/IOutlay';
import { ListFormCreate, ListFormUpdate } from 'widgets/ListForm';
import { FC, useState } from 'react';
import { ActionButtons } from 'widgets/ActionButtons/ui/ActionButtons';
import { ListItemUI, ListItemWrapperUI } from './ListItem.styles';

interface ListItemProps {
    outlay: IOutlay,
}

export const ListItem: FC<ListItemProps> = (props) => {
    const [isActiveCreateForm, setIsActiveCreateForm] = useState<boolean>(false);
    const { outlay } = props;

    const handleChangeIsActive = () => {
        setIsActiveCreateForm((prev) => !prev);
    };

    return (
        <ListItemUI>
            <ListItemWrapperUI>
                <ActionButtons
                    handleChangeIsActive={handleChangeIsActive}
                    rID={outlay.id} />
                <ListFormUpdate rID={outlay.id} outlay={outlay} />
            </ListItemWrapperUI>
            {isActiveCreateForm
                && (
                    <ListFormCreate
                        handleChangeIsActive={handleChangeIsActive}
                        rID={outlay.id} />
                )
            }
            {outlay.child && outlay.child.length > 0 && (
                <>
                    {outlay.child.map((childOutlay) => {
                        return <ListItem key={childOutlay.id} outlay={childOutlay} />;
                    })}
                </>
            )}
        </ListItemUI>
    );
};
