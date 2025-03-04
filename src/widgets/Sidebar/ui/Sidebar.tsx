import { FC } from 'react';
import { AppLink } from 'shared';
import { SidebarContainer } from './Sidebar.styles';

interface SidebarProps {
}

export const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <SidebarContainer>
            <AppLink iconIsActive to='/'>По проекту</AppLink>
            <AppLink iconIsActive to='/'>Объекты</AppLink>
            <AppLink iconIsActive to='/'>РД</AppLink>
            <AppLink iconIsActive to='/'>МТО</AppLink>
            <AppLink iconIsActive to='/'>СМР</AppLink>
            <AppLink iconIsActive to='/'>График</AppLink>
            <AppLink iconIsActive to='/'>МиМ</AppLink>
            <AppLink iconIsActive to='/'>Рабочие</AppLink>
            <AppLink iconIsActive to='/'>Капвложения</AppLink>
            <AppLink iconIsActive to='/'>Бюджет</AppLink>
            <AppLink iconIsActive to='/'>Финансирование</AppLink>
            <AppLink iconIsActive to='/'>Панорамы</AppLink>
            <AppLink iconIsActive to='/'>Камеры</AppLink>
            <AppLink iconIsActive to='/'>Поручения</AppLink>
            <AppLink iconIsActive to='/'>Контрагенты</AppLink>
        </SidebarContainer>
    );
};
