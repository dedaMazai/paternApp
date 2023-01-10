import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button/Button';
import { getMainPageView } from '@/pages/MainPage/modal/selectors/getMainPage';

import cls from './ToggleButtonGroup.module.scss';
import { mainPageActions } from '@/pages/MainPage/modal/slice/mainPageSlice';

interface ToggleButtonGroupProps {
    className?: string
}

export const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const view = useSelector(getMainPageView);

    const { t } = useTranslation();

    const buy = () => {
        dispatch(mainPageActions.setView('buy'));
    };
    const sell = () => {
        dispatch(mainPageActions.setView('sell'));
    };

    return (
        <div className={classNames(cls.ToggleButtonGroup, {}, [className])}>
            <Button
                theme={view === 'buy' ? ThemeButton.BACKGROUND_GREEN : ThemeButton.BACKGROUND_INVERTED_BG}
                size={SizeButton.L}
                square
                onClick={buy}
            >
                {t('Buy')}
            </Button>
            <Button
                theme={view === 'sell' ? ThemeButton.BACKGROUND_RED : ThemeButton.BACKGROUND_INVERTED_BG}
                size={SizeButton.L}
                square
                onClick={sell}
            >
                {t('Sell')}
            </Button>
        </div>
    );
};
