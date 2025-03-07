import { createSlice } from '@reduxjs/toolkit';

interface ActivityState {
    isEditState: boolean
}

type ActionType = {
    type: string,
    payload: boolean,
}

const initialState: ActivityState = {
    isEditState: false,
};

export const ActivitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        changeIsEditState(state, action: ActionType) {
            // eslint-disable-next-line no-param-reassign
            state.isEditState = action.payload;
        },
    },
});

export const { changeIsEditState } = ActivitySlice.actions;

export default ActivitySlice.reducer;
