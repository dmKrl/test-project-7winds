import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from 'features/hooks/redux';
import { OutlayAPI } from 'features/services/OutlayService';
import {
    InputCreateDevices,
    InputCreateNameWork,
    InputCreateOverheads,
    InputCreateProfit,
    InputCreateSalary,
    ListFormContainer,
} from './ListFormCreate.styles';

interface ListFormCreateProps {
    rID?: number;
    handleChangeIsActive?: () => void,
}

export interface IInputsCreate {
    inputCreateNameWork: string,
    inputCreateSalary: number,
    inputCreateDevices: number,
    inputCreateOverheads: number,
    inputCreateProfit: number,
}

export const ListFormCreate: FC<ListFormCreateProps> = ({
    rID,
    handleChangeIsActive,
}) => {
    const [inputs, setInputs] = useState<IInputsCreate>({
        inputCreateNameWork: '',
        inputCreateSalary: 0,
        inputCreateDevices: 0,
        inputCreateOverheads: 0,
        inputCreateProfit: 0,
    });
    const [createOutlay] = OutlayAPI.useCreateRowOutlayMutation();
    const { eID } = useAppSelector((state) => state.outlayReducer);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = async (inputs: IInputsCreate) => {
        try {
            const response = await createOutlay({ inputs, eID, rID });
            handleChangeIsActive();
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
            <InputCreateNameWork
                type='string'
                name='inputCreateNameWork'
                value={inputs.inputCreateNameWork}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <InputCreateSalary
                type='number'
                name='inputCreateSalary'
                value={inputs.inputCreateSalary}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <InputCreateDevices
                type='number'
                name='inputCreateDevices'
                value={inputs.inputCreateDevices}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <InputCreateOverheads
                type='number'
                name='inputCreateOverheads'
                value={inputs.inputCreateOverheads}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <InputCreateProfit
                type='number'
                name='inputCreateProfit'
                value={inputs.inputCreateProfit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
        </ListFormContainer>
    );
};
