import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOutlay } from 'features/store/models/IOutlay';

export const OutlayAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081/' }),
    endpoints: (build) => ({
        fetchAllOutlay: build.query<IOutlay[], number>({
            query: (eID) => ({
                url: `/v1/outlay-rows/entity/${eID}/row/list`,
            }),
        }),
    }),
});
