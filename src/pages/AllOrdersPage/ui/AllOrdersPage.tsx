import { useTranslation } from 'react-i18next';
import { InputWithLabel } from '@/shared/ui/inputWithLabel/InputWithLabel';
import { CustomSelect } from '@/shared/ui/CustomSelect/CustomSelect';

import cls from './AllOrdersPage.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';

const AllOrdersPage = () => {
    const { t } = useTranslation();
    const fiatCurrenciesProps = [
        {
            img: '123',
            full_name: 'fewfwf',
            value: '1232',
            name: 'name',
        },
        {
            img: '213',
            full_name: '321',
            value: '324',
            name: '432',
        },
        {
            img: 'hh',
            full_name: 'hh',
            value: 'hh',
            name: 'hh',
        },
        {
            img: 'tt',
            full_name: 'tt',
            value: 'tt',
            name: 'tt',
        },
    ];

    const selectedFiat = {
        img: 'tt',
        full_name: 'tt',
        value: 'tt',
        name: 'tt',
    };

    return (
        <VStack gap="16" className={cls.AllOrdersPage}>
            <HStack gap="24">
                <CustomSelect
                    list={fiatCurrenciesProps}
                    selectHandler={() => {}}
                    label={t('From')}
                    selected={selectedFiat}
                    fullWidth
                />
                <CustomSelect
                    list={fiatCurrenciesProps}
                    selectHandler={() => {}}
                    label={t('To')}
                    selected={selectedFiat}
                    fullWidth
                />
                <CustomSelect
                    list={fiatCurrenciesProps}
                    selectHandler={() => {}}
                    label={t('Status')}
                    selected={selectedFiat}
                    fullWidth
                />
                <InputWithLabel
                    onChange={() => {}}
                    value={''}
                    placeholder={t('Enter a number')}
                    label={t('You give')}
                />
                <InputWithLabel
                    onChange={() => {}}
                    value={''}
                    placeholder={t('Enter a number')}
                    label={t('You get')}
                />
            </HStack>
            <HStack gap="24" align="end">
                <InputWithLabel
                    onChange={() => {}}
                    value={''}
                    placeholder={t('Enter the ID')}
                    label={t('Order ID')}
                />
                <InputWithLabel
                    onChange={() => {}}
                    value={''}
                    placeholder={t('Enter the card')}
                    label={t('Trader\'s Card')}
                />
                <InputWithLabel
                    onChange={() => {}}
                    value={''}
                    placeholder={t('Enter the card')}
                    label={t('Sender\'s card')}
                />
                <Button
                    theme={ThemeButton.OUTLINE_INVERTED}
                    // size={SizeButton.XL}
                    // onClick={sell}
                >
                    {t('Descending')}
                </Button>
                <Button
                    theme={ThemeButton.OUTLINE_INVERTED}
                    // size={SizeButton.XL}
                    // onClick={sell}
                >
                    {t('Ascending')}
                </Button>
                <Button
                    theme={ThemeButton.OUTLINE_INVERTED}
                    // size={SizeButton.XL}
                    // onClick={sell}
                >
                    {t('Throw off')}
                </Button>
            </HStack>
        </VStack>
    );
};

export default AllOrdersPage;
