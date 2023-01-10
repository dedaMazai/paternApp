import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
export const getInviteCode = (state: StateSchema) => state?.loginForm?.inviteCode || '';
