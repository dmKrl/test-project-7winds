import { FC } from 'react';
import {
    InfobarContainer,
    TextDevices,
    TextLevel,
    TextNameWork,
    TextOverheads,
    TextProfit,
    TextSalary,
} from './Infobar.styles';

interface InfobarProps {
}

export const Infobar: FC<InfobarProps> = (props) => {
    return (
        <InfobarContainer>
            <TextLevel>Уровень</TextLevel>
            <TextNameWork>Наименование работ</TextNameWork>
            <TextSalary>Основная з/п</TextSalary>
            <TextDevices>Оборудование</TextDevices>
            <TextOverheads>Накладные расходы</TextOverheads>
            <TextProfit>Сметная прибыль</TextProfit>
        </InfobarContainer>
    );
};
