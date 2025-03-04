import { FC } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Topbar } from 'widgets/Topbar';
import { HeaderContainer } from './Header.styles';

interface HeaderProps {
}

export const Header: FC<HeaderProps> = (props) => {
    return (
        <HeaderContainer>
            <Navbar />
            <Topbar />
        </HeaderContainer>
    );
};
