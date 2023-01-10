import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginPassword, getLoginUsername } from '../../modal/selectors/getLoginForm';
import { loginActions, loginReducer } from '../../modal/slice/loginSlice';
import { InputWithLabel } from '@/shared/ui/inputWithLabel/InputWithLabel';
import { useLogin } from '../../modal/api/loginApi';
import { VStack } from '@/shared/ui/Stack';

import cls from './LoginForm.module.scss';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorages';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const dispatch = useAppDispatch();
    const [login, loginResult] = useLogin();

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        login({ username, password });
        if (loginResult?.isSuccess) {
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(loginResult.data));
            // dispatch(userActions.setAuthData(loginResult.data));
            onSuccess();
        }
    }, [login, loginResult.data, loginResult?.isSuccess, onSuccess, password, username]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <VStack max justify="center" gap="8" className={classNames(cls.LoginForm, {}, [className])}>
                <InputWithLabel
                    placeholder={t('inputLogin')}
                    label={t('loginName')}
                    onChange={onChangeUserName}
                    value={username}
                    fullWidth
                />
                <InputWithLabel
                    placeholder={t('inputPassword')}
                    label={t('passwordName')}
                    onChange={onChangePassword}
                    value={password}
                    fullWidth
                />
                {loginResult?.error && <Text text={t('userAuthorizationInvalid')} theme={TextTheme.ERROR} />}
                <Button
                    theme={ThemeButton.BACKGROUND}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    fullWidth
                    disabled={loginResult.isLoading || !password.length || !username.length}
                >
                    {t('login')}
                </Button>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
