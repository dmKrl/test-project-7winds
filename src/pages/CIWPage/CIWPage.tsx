import { FC } from 'react';
import { Infobar } from 'widgets/Infobar';
import { CIWPageContainer } from './CIWPage.styles';

interface CIWPageProps {
}

export const CIWPage: FC<CIWPageProps> = (props) => {
    return (
        <CIWPageContainer>
            <Infobar />
        </CIWPageContainer>
    );
};
