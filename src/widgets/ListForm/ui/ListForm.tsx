import { FC } from 'react';
import {
    InputDevices,
    InputNameWork,
    InputOverheads,
    InputProfit,
    InputSalary,
    ListFormContainer,
} from './ListForm.styles';

interface ListFormProps {
}

export const ListForm: FC<ListFormProps> = (props) => {
    return (
        <ListFormContainer>
            <InputNameWork />
            <InputSalary />
            <InputDevices />
            <InputOverheads />
            <InputProfit />
        </ListFormContainer>
    );
};
