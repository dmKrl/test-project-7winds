import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { OutlayAPI } from 'features/services/OutlayService';
import outlayReducer from 'features/store/slices/OutlaySlice';

export const rootReducer = combineReducers({
    outlayReducer,
    [OutlayAPI.reducerPath]: OutlayAPI.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(OutlayAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
