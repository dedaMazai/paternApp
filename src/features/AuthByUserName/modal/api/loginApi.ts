import { User, userActions } from '@/entities/User';
import { rtqApi } from '@/shared/api/rtqApi';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

const loginApi = rtqApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.query<User, LoginByUserNameProps>({
            query: (arg) => ({
                url: '/login',
                method: 'POST',
                body: arg,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(userActions.setAuthData(data));
                    dispatch(userActions.setAuthData(data));
                } catch (err) {
                    console.log(err);
                }
            },
        }),
    }),
});

export const useLogin = loginApi.useLazyLoginQuery;
