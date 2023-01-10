import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useBalance } from '../../api/balanceApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

import cls from './BalanceInformation.module.scss';

interface BalanceInformationProps {
    className?: string
}

export const BalanceInformation = (props: BalanceInformationProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading } = useBalance(null);

    if (isLoading) {
        return (
            <VStack className={classNames(cls.BalanceInformation, {}, [className])}>
                <Text text={t('Balance')} size={TextSize.S} theme={TextTheme.GREY200} />
                <Skeleton width="280px" border="12px" height="65px" />
            </VStack>
        );
    }

    return (
        <VStack className={classNames(cls.BalanceInformation, {}, [className])}>
            <Text text={t('Balance')} size={TextSize.S} theme={TextTheme.GREY200} />
            <Card
                theme={CardTheme.NORMAL}
                inverted
            >
                <HStack justify="around" gap="32">
                    <Text text={t('Available')} size={TextSize.S} theme={TextTheme.GREY200} />
                    <Text text={t('Frozen')} size={TextSize.S} theme={TextTheme.GREY200} />
                    <Text text={t('Currency')} size={TextSize.S} theme={TextTheme.GREY200} />
                </HStack>
                <HStack justify="around" gap="32">
                    <Text text={data?.available} size={TextSize.M} weight="bold" />
                    <Text text={data?.frozen} size={TextSize.M} weight="bold" />
                    <Text text={data?.currency} size={TextSize.M} weight="bold" />
                </HStack>
            </Card>
        </VStack>
    );
};
