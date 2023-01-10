import { rtqApi } from '@/shared/api/rtqApi';

const informationApi = rtqApi.injectEndpoints({
    endpoints: (build) => ({
        getInformation: build.query<any, null>({
            query: () => ({
                url: '/information',
            }),
        }),
    }),
});

export const useInformation = informationApi.useGetInformationQuery;
