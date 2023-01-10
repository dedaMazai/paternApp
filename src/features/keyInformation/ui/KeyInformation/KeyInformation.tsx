import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import Copy from '@/shared/assets/icons/Copy.svg';

import cls from './KeyInformation.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon/Icon';
import { useInformation } from '../../api/informationApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface KeyInformationProps {
    className?: string;
}

export const KeyInformation = (props: KeyInformationProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading } = useInformation(null);

    if (isLoading) {
        return (
            <VStack className={classNames('', {}, [className])}>
                <Text text={t('Information about you')} size={TextSize.S} theme={TextTheme.GREY200} />
                <Skeleton width="350px" border="12px" height="65px" />
            </VStack>
        );
    }

    return (
        <VStack className={classNames('', {}, [className])}>
            <Text text={t('Information about you')} size={TextSize.S} theme={TextTheme.GREY200} />
            <Card
                theme={CardTheme.NORMAL}
                inverted
                className={classNames(cls.KeyInformation, {}, [className])}
            >
                <HStack gap="8">
                    <Text text={t('Key')} size={TextSize.S} theme={TextTheme.GREY200} />
                    <Text text={data?.key} size={TextSize.S} />
                    <Icon Svg={Copy} className={cls.icon} />
                </HStack>
            </Card>
        </VStack>
    );
};
