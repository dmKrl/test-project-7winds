import { FC } from 'react';
import { AppLink } from 'shared';
import { SidebarContainer } from './Sidebar.styles';

interface SidebarProps {
}

export const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <SidebarContainer>
            <AppLink to='/'>По проекту</AppLink>
            <AppLink to='/'>Объекты</AppLink>
            <AppLink to='/'>РД</AppLink>
            <AppLink to='/'>МТО</AppLink>
            <AppLink to='/'>СМР</AppLink>
            <AppLink to='/'>График</AppLink>
            <AppLink to='/'>МиМ</AppLink>
            <AppLink to='/'>Рабочие</AppLink>
            <AppLink to='/'>Капвложения</AppLink>
            <AppLink to='/'>Бюджет</AppLink>
            <AppLink to='/'>Финансирование</AppLink>
            <AppLink to='/'>Панорамы</AppLink>
            <AppLink to='/'>Камеры</AppLink>
            <AppLink to='/'>Поручения</AppLink>
            <AppLink to='/'>Контрагенты</AppLink>
        </SidebarContainer>
    );
};
