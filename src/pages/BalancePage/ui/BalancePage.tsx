import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';
import { KeyInformation } from '@/features/keyInformation';
import { BalanceInformation } from '@/features/balance';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

import cls from './BalancePage.module.scss';

const BalancePage = () => {
    const { t } = useTranslation();

    return (
        <VStack max gap="16" className={cls.BalancePage}>
            <HStack max justify="between" className={cls.BalancePageHeader}>
                <KeyInformation />
                <BalanceInformation />
            </HStack>
            <HStack max justify="end">
                <VStack gap="8" className={cls.buttons}>
                    <Button
                        theme={ThemeButton.BACKGROUND}
                        className={cls.Btn}
                        fullWidth
                    >
                        {t('Replenish')}
                    </Button>
                    <Button
                        theme={ThemeButton.OUTLINE}
                        className={cls.Btn}
                        fullWidth
                    >
                        {t('Withdraw')}
                    </Button>
                </VStack>
            </HStack>
        </VStack>
    );
};

export default BalancePage;
