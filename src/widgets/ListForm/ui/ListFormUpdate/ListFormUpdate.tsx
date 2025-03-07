import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'features/hooks/redux';
import { OutlayAPI } from 'features/services/OutlayService';
import { IOutlay } from 'features/store/models/IOutlay';
import { changeIsEditState } from 'features/store/slices/ActivitySlice';
import {
    InputUpdateDevices,
    InputUpdateNameWork,
    InputUpdateOverheads,
    InputUpdateProfit,
    InputUpdateSalary,
    ListFormContainer,
} from './ListFormUpdate.styles';

interface ListFormUpdateProps {
    outlay?: IOutlay;
    rID: number;
}

export interface IInputsUpdate {
    inputUpdateNameWork: string,
    inputUpdateSalary: number,
    inputUpdateDevices: number,
    inputUpdateOverheads: number,
    inputUpdateProfit: number,
}

export const ListFormUpdate: FC<ListFormUpdateProps> = ({ outlay, rID }) => {
    const [inputs, setInputs] = useState<IInputsUpdate>({
        inputUpdateNameWork: outlay.rowName,
        inputUpdateSalary: outlay.salary,
        inputUpdateDevices: outlay.equipmentCosts,
        inputUpdateOverheads: outlay.overheads,
        inputUpdateProfit: outlay.estimatedProfit,
    });
    const [updateChosenOutlay] = OutlayAPI.useUpdateChosenOutlayMutation();
    const { eID } = useAppSelector((state) => state.outlayReducer);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleDoubleClick = () => {
        setIsEdit(true);
        dispatch(changeIsEditState(true));
    };

    const handleBlur = () => {
        setIsEdit(false);
        dispatch(changeIsEditState(false));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = async (inputs: IInputsUpdate) => {
        try {
            const response = await updateChosenOutlay({ inputs, eID, rID });
            handleBlur();
            console.log(response.data);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (Object.values(inputs).every((input) => input !== 0 || input !== '')) {
                handleSubmit(inputs);
            } else {
                alert('Пожалуйста, заполните все поля!');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [inputs]);

    return (
        <ListFormContainer>
            <InputUpdateNameWork
                type='string'
                name='inputUpdateNameWork'
                value={inputs.inputUpdateNameWork}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                onDoubleClick={handleDoubleClick}
                isEdit={isEdit}
                readOnly={!isEdit}
            />
            <InputUpdateSalary
                type='number'
                name='inputUpdateSalary'
                value={inputs.inputUpdateSalary}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                onDoubleClick={handleDoubleClick}
                isEdit={isEdit}
                readOnly={!isEdit}
            />
            <InputUpdateDevices
                type='number'
                name='inputUpdateDevices'
                value={inputs.inputUpdateDevices}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                onDoubleClick={handleDoubleClick}
                isEdit={isEdit}
                readOnly={!isEdit}
            />
            <InputUpdateOverheads
                type='number'
                name='inputUpdateOverheads'
                value={inputs.inputUpdateOverheads}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                onDoubleClick={handleDoubleClick}
                isEdit={isEdit}
                readOnly={!isEdit}
            />
            <InputUpdateProfit
                type='number'
                name='inputUpdateProfit'
                value={inputs.inputUpdateProfit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                onDoubleClick={handleDoubleClick}
                isEdit={isEdit}
                readOnly={!isEdit}
            />
        </ListFormContainer>
    );
};
