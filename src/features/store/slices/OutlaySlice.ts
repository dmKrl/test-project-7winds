import { createSlice } from '@reduxjs/toolkit';
import { IOutlay } from '../models/IOutlay';

interface OutlayState {
    outlays: IOutlay[] | [];
    isLoading: boolean;
    error: string;
    eID: number;
}

type ActionType = {
    type: string,
    payload: IOutlay[] | [],
}

const initialState: OutlayState = {
    outlays: [],
    isLoading: false,
    error: '',
    eID: 148555,
};

export const OutlaySlice = createSlice({
    name: 'outlay',
    initialState,
    reducers: {
        setOutlays(state, action: ActionType) {
            // eslint-disable-next-line no-param-reassign
            state.outlays = action.payload;
            console.log(action.payload);
        },
    },
});

export const { setOutlays } = OutlaySlice.actions;

export default OutlaySlice.reducer;
