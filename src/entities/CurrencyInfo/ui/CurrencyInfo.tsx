import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';

import cls from './CurrencyInfo.module.scss';

interface CurrencyInfoProps {
    className?: string;
    name: string;
    value: number;
    currency: string;
}

export const CurrencyInfo = (props: CurrencyInfoProps) => {
    const {
        className,
        name,
        value,
        currency,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CurrencyInfo, {}, [className])}>
            <HStack gap="8">
                <Text weight="normal" theme={TextTheme.GREY200} text={name} size={TextSize.XS} />
                <HStack gap="4">
                    <Text weight="bold" text={value.toString()} size={TextSize.S} />
                    <Text weight="bold" text={currency} size={TextSize.S} />
                </HStack>
            </HStack>
        </div>
    );
};
