import { Navbar } from 'widgets/Navbar';
import { Topbar } from 'widgets/Topbar';
import { HeaderContainer } from './Header.styles';

export const Header = () => {
    return (
        <HeaderContainer>
            <Navbar />
            <Topbar />
        </HeaderContainer>
    );
};
