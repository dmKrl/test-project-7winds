import { Button } from 'shared/ui/Button/Button';
import ButtonArrow from 'widgets/assets/icons/button-arrow.svg';
import {
    TopbarContainer,
    TopbarContentBlock,
    TopbarText,
    TopbarTitle,
} from './Topbar.styles';

export const Topbar = () => {
    return (
        <TopbarContainer>
            <TopbarContentBlock>
                <TopbarText>
                    Название проекта
                    <span>Аббревиатура</span>
                </TopbarText>
                <Button><ButtonArrow /></Button>
            </TopbarContentBlock>
            <TopbarContentBlock>
                <TopbarTitle>Строительно-монтажные работы</TopbarTitle>
            </TopbarContentBlock>
        </TopbarContainer>
    );
};
