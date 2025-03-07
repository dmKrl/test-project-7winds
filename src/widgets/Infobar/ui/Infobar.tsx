import {
    InfobarContainer,
    InfobarContainerBlockLeft,
    InfobarContainerBlockRight,
    TextDevices,
    TextLevel,
    TextNameWork,
    TextOverheads,
    TextProfit,
    TextSalary,
} from './Infobar.styles';

export const Infobar = () => {
    return (
        <InfobarContainer>
            <InfobarContainerBlockLeft>
                <TextLevel>Уровень</TextLevel>
                <TextNameWork>Наименование работ</TextNameWork>
            </InfobarContainerBlockLeft>
            <InfobarContainerBlockRight>
                <TextSalary>Основная з/п</TextSalary>
                <TextDevices>Оборудование</TextDevices>
                <TextOverheads>Накладные расходы</TextOverheads>
                <TextProfit>Сметная прибыль</TextProfit>
            </InfobarContainerBlockRight>
        </InfobarContainer>
    );
};
