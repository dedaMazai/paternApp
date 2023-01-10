import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Select } from '@/shared/ui/Select/Select';
import { Currencies } from '../../modal/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currencies;
    onChange?: (value: Currencies) => void;
    readonly?: boolean;
}

const options = [
    { value: Currencies.RUB, content: Currencies.RUB },
    { value: Currencies.EUR, content: Currencies.EUR },
    { value: Currencies.USD, content: Currencies.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currencies);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Choose a currency')}
            label={t('Choose a currency')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
