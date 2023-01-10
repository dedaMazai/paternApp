import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainPageSchema } from '../types/mainPageSchema';

const initialState: MainPageSchema = {
    view: 'buy',
};

export const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<string>) => {
            state.view = action.payload;
        },
    },
});

export const { actions: mainPageActions } = mainPageSlice;
export const { reducer: mainPageReducer } = mainPageSlice;
