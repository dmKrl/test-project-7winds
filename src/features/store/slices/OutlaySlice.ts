import { createSlice } from '@reduxjs/toolkit';
import { IOutlay } from '../models/IOutlay';

interface OutlayState {
    outlays: IOutlay[];
    isLoading: boolean;
    error: string;
    eID: number;
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

    },
});

export default OutlaySlice.reducer;
