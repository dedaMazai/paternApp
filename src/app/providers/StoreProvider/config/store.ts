import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState, Reducer } from 'redux';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { rtqApi } from '@/shared/api/rtqApi';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { mainPageReducer } from '@/pages/MainPage/modal/slice/mainPageSlice';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        mainPage: mainPageReducer,
        [rtqApi.reducerPath]: rtqApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(rtqApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// const storeReturn = createReduxStore();
// export type AppDispatch = typeof storeReturn.dispatch;
// или
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
