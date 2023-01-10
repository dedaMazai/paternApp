import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Badge.module.scss';

interface BadgeProps {
    className?: string
    text: string;
    active?: boolean;
}

export const Badge = (props: BadgeProps) => {
    const { className, text, active } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Badge, { [cls.active]: active }, [className])}>
            {text}
        </div>
    );
};
