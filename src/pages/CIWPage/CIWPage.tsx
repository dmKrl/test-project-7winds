import { FC, useEffect } from 'react';
import { Infobar } from 'widgets/Infobar';
import { OutlayAPI } from 'features/services/OutlayService';
import { ListItems } from 'widgets/ListItems';
import { useAppSelector } from 'features/hooks/redux';
import { CIWPageContainer } from './CIWPage.styles';

interface CIWPageProps {
}

export const CIWPage: FC<CIWPageProps> = (props) => {
    const { eID } = useAppSelector((state) => state.outlayReducer);
    const { data } = OutlayAPI.useGetAllOutlayQuery(eID);
    console.log(data, eID);
    useEffect(() => {
    }, []);
    return (
        <CIWPageContainer>
            <Infobar />
            <ListItems />
        </CIWPageContainer>
    );
};
