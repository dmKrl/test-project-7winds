import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOutlay } from 'features/store/models/IOutlay';

export const OutlayAPI = createApi({
    reducerPath: 'outlayAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081/' }),
    tagTypes: ['Outlay'],
    endpoints: (build) => ({
        getAllOutlay: build.query<IOutlay[], number>({
            query: (eID) => ({
                url: `/v1/outlay-rows/entity/${eID}/row/list`,
            }),
            providesTags: (result) => ['Outlay'],
        }),
        createRowOutlay: build.mutation<IOutlay[], number>({
            query: (eID) => ({
                url: `/v1/outlay-rows/entity/${eID}/row/list`,
                method: 'POST',
            }),
            invalidatesTags: ['Outlay'],
        }),
        // updateChosenOutlay: build.mutation<IOutlay[], number>({
        //     query: (eID: number, rID: number) => ({
        //         url: `/v1/outlay-rows/entity/${eID}/row/${rID}/update`,
        //         method: 'POST',
        //     }),
        //     invalidatesTags: ['Outlay'],
        // }),
        // deleteChosenOutlay: build.mutation({
        //     query: (eID, rID) => ({
        //         url: `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Outlay'],
        // }),
    }),
});
