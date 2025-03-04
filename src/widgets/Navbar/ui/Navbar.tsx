import { FC } from 'react';
import IconSquares from 'widgets/assets/icons/icon-squares.svg';
import IconArrow from 'widgets/assets/icons/icon-arrow.svg';
import { AppLink } from 'shared';
import { NavbarContainer } from './Navbar.styles';

interface NavbarProps {
}

export const Navbar: FC<NavbarProps> = (props) => {
    return (
        <NavbarContainer>
            <AppLink to='/'><IconSquares /></AppLink>
            <AppLink to='/'><IconArrow /></AppLink>
            <AppLink to='/'>Просмотр</AppLink>
            <AppLink to='/'>Управление</AppLink>
        </NavbarContainer>
    );
};
