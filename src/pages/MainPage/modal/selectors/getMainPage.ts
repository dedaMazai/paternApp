import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getMainPageView = (state: StateSchema) => state.mainPage?.view || 'buy';
