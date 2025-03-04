import { FC } from 'react';
import { Navbar } from 'widgets/Navbar';
import { HeaderContainer } from './Header.styles';

interface HeaderProps {
}

export const Header: FC<HeaderProps> = (props) => {
    return (
        <HeaderContainer>
            <Navbar />
        </HeaderContainer>
    );
};
