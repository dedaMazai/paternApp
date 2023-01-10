import { useTranslation } from 'react-i18next';
import { ToggleButtonGroup } from '@/entities/ToggleButtonGroup';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Badge } from '@/shared/ui/Badge/Badge';

import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();
    // const fiatCurrenciesProps = [
    //     {
    //         img: '123',
    //         full_name: 'fewfwf',
    //         value: '1232',
    //         name: 'name',
    //     },
    //     {
    //         img: '213',
    //         full_name: '321',
    //         value: '324',
    //         name: '432',
    //     },
    //     {
    //         img: 'hh',
    //         full_name: 'hh',
    //         value: 'hh',
    //         name: 'hh',
    //     },
    //     {
    //         img: 'tt',
    //         full_name: 'tt',
    //         value: 'tt',
    //         name: 'tt',
    //     },
    // ];

    // const selectedFiat = {
    //     img: 'tt',
    //     full_name: 'tt',
    //     value: 'tt',
    //     name: 'tt',
    // };

    return (
        <VStack max gap="16" className={cls.MainPage}>
            {/* <CustomSelect
                list={fiatCurrenciesProps}
                selectHandler={() => {}}
                label="Фиат"
                selected={selectedFiat}
                fullWidth
            /> */}
            <HStack gap="16">
                <ToggleButtonGroup />
                <Badge text="RTCUSD" active />
            </HStack>
            <HStack gap="8">
                <Button
                    theme={ThemeButton.BACKGROUND}
                    size={SizeButton.XL}
                >
                    {t('Create an offer')}
                </Button>
                <Button
                    theme={ThemeButton.BACKGROUND_RED}
                    size={SizeButton.XL}
                >
                    {t('DEACTIVATE')}
                </Button>
            </HStack>
        </VStack>
    );
};

export default MainPage;
