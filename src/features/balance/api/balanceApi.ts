import { rtqApi } from '@/shared/api/rtqApi';

const balanceApi = rtqApi.injectEndpoints({
    endpoints: (build) => ({
        getBalance: build.query<any, null>({
            query: () => ({
                url: '/balance',
            }),
        }),
    }),
});

export const useBalance = balanceApi.useGetBalanceQuery;
