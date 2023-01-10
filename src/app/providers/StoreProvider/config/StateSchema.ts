import { EnhancedStore } from '@reduxjs/toolkit';
import { UserSchema } from '@/entities/User';
import { CounterSchema } from '@/entities/Counter';
import { LoginSchema } from '@/features/AuthByUserName';
import { rtqApi } from '@/shared/api/rtqApi';
import { ReducerManager } from './reducerManager';
import { MainPageSchema } from '@/pages/MainPage/modal/types/mainPageSchema';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    mainPage: MainPageSchema;
    [rtqApi.reducerPath]: ReturnType<typeof rtqApi.reducer>,

    // Асинхронные редьюсеры
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
