import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOutlay } from 'features/store/models/IOutlay';
import { IInputsCreate } from 'widgets/ListForm/ui/ListFormCreate/ListFormCreate';
import { IInputsUpdate } from 'widgets/ListForm/ui/ListFormUpdate/ListFormUpdate';

export const OutlayAPI = createApi({
    reducerPath: 'outlayAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081/' }),
    tagTypes: ['Outlay'],
    endpoints: (build) => ({

        getAllOutlay: build.query<IOutlay[] | [], number>({
            query: (eID) => ({
                url: `/v1/outlay-rows/entity/${eID}/row/list`,
            }),
            providesTags: (result) => ['Outlay'],
        }),

        createRowOutlay: build.mutation<IOutlay, {
            inputs: IInputsCreate,
            eID: number,
            rID?: number | undefined
        }>({
            query: ({ inputs, eID, rID }) => ({
                url: `/v1/outlay-rows/entity/${eID}/row/create`,
                method: 'POST',
                body: {
                    equipmentCosts: inputs.inputCreateDevices,
                    estimatedProfit: inputs.inputCreateProfit,
                    machineOperatorSalary: 0,
                    mainCosts: 0,
                    materials: 0,
                    mimExploitation: 0,
                    overheads: inputs.inputCreateOverheads,
                    parentId: rID || null,
                    rowName: inputs.inputCreateNameWork,
                    salary: inputs.inputCreateSalary,
                    supportCosts: 0,
                },
            }),
            invalidatesTags: ['Outlay'],
        }),

        updateChosenOutlay: build.mutation<IOutlay[], {
            inputs: IInputsUpdate,
            eID: number,
            rID: number
        }>({
            query: ({ inputs, eID, rID }) => ({
                url: `/v1/outlay-rows/entity/${eID}/row/${rID}/update`,
                method: 'POST',
                body: {
                    equipmentCosts: inputs.inputUpdateDevices,
                    estimatedProfit: inputs.inputUpdateProfit,
                    machineOperatorSalary: 0,
                    mainCosts: 0,
                    materials: 0,
                    mimExploitation: 0,
                    overheads: inputs.inputUpdateOverheads,
                    parentId: null,
                    rowName: inputs.inputUpdateNameWork,
                    salary: inputs.inputUpdateSalary,
                    supportCosts: 0,
                },
            }),
            invalidatesTags: ['Outlay'],
        }),

        deleteChosenOutlay: build.mutation<IOutlay, { eID: number, rID: number }>({
            query: ({ eID, rID }) => ({
                url: `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Outlay'],
        }),
    }),
});
