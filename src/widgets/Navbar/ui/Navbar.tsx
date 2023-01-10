import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

import cls from './Navbar.module.scss';
import { CurrencyInfo } from '@/entities/CurrencyInfo/ui/CurrencyInfo';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <HStack gap="8">
                    <AppLink
                        to={RoutePath.main}
                    >
                        <Text
                            className={cls.appName}
                            title={t('App')}
                            size={TextSize.L}
                            weight="bold"
                            theme={TextTheme.PRIMARY}
                        />
                    </AppLink>
                    <LangSwitcher />
                    <HStack className={cls.currency} gap="16">
                        <HStack className={cls.rightLine} gap="16">
                            <CurrencyInfo
                                name={t('PURCHASE')}
                                value={75.23}
                                currency="USDT"
                            />
                            <CurrencyInfo
                                name={t('SALE')}
                                value={73.12}
                                currency="USDT"
                            />
                        </HStack>
                        <CurrencyInfo
                            name={t('BALANCE')}
                            value={72.22}
                            currency="USDT"
                        />
                    </HStack>
                </HStack>
                <NotificationButton className={cls.actions} />
                <HStack gap="16" className={cls.actionLogout}>
                    <AppLink
                        className={cls.createLink}
                        to={RoutePath.allOrders}
                        theme={AppLinkTheme.PRIMARY}
                    >
                        {t('All orders')}
                    </AppLink>
                    <AppLink
                        className={cls.createLink}
                        to={RoutePath.balance}
                        theme={AppLinkTheme.PRIMARY}
                    >
                        {t('Profile')}
                    </AppLink>
                    <Button
                        type="button"
                        theme={ThemeButton.BACKGROUND}
                        className={cls.links}
                        onClick={onShowModal}
                        size={SizeButton.M}
                    >
                        {t('logout')}
                    </Button>
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <HStack gap="8">
                <AppLink
                    to={RoutePath.main}
                >
                    <Text
                        className={cls.appName}
                        title={t('App')}
                        size={TextSize.L}
                        weight="bold"
                        theme={TextTheme.PRIMARY}
                    />
                </AppLink>
                <LangSwitcher />
            </HStack>
            <Button
                type="button"
                theme={ThemeButton.BACKGROUND}
                className={cls.actions}
                onClick={onShowModal}
                size={SizeButton.M}
            >
                {t('login')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    onClose={onCloseModal}
                    isOpen={isAuthModal}
                />
            )}
        </header>
    );
});
