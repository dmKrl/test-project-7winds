import { FC, useEffect } from 'react';
import { Infobar } from 'widgets/Infobar';
import { IOutlay } from 'features/store/models/IOutlay';
import { OutlayAPI } from 'features/services/OutlayService';
import { setOutlays } from 'features/store/slices/OutlaySlice';
import { useAppDispatch, useAppSelector } from 'features/hooks/redux';
import { ListItems } from 'widgets/ListItems';
import { CIWPageContainer } from './CIWPage.styles';

interface CIWPageProps {
}

export const CIWPage: FC<CIWPageProps> = (props) => {
    const { eID, outlays } = useAppSelector((state) => state.outlayReducer);
    const { data } = OutlayAPI.useGetAllOutlayQuery(eID);
    const dispatch = useAppDispatch();

    const changeOutlays = (data: [] | IOutlay[]) => {
        if (!data?.length) {
            console.log('undefined');
            return;
        }
        console.log('none undefined');
        dispatch(setOutlays(data));
    };

    useEffect(() => {
        changeOutlays(data);
        console.log(data, eID);
        console.log(outlays);
    }, [data, outlays]);
    return (
        <CIWPageContainer>
            <Infobar />
            <ListItems />
        </CIWPageContainer>
    );
};
