import { useTranslation } from 'react-i18next';
import { NotificationList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';
import Notification from '@/shared/assets/icons/Notification.svg';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const trigger = (
        <div className={cls.trigger}>
            <Icon Svg={Notification} inverted />
        </div>
    );

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={trigger}
        >
            <NotificationList className={cls.notification} />
        </Popover>
    );
};
