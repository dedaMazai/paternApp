import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../../Button/Button';
import Language from '@/shared/assets/icons/Language.svg';
import { Icon } from '../../Icon/Icon';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string,
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggle}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            <Icon Svg={Language} />
        </Button>
    );
};
