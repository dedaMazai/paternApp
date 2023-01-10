import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Bot from '@/shared/assets/icons/BotIcon.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ShowBotsModal } from '@/entities/ShowBots';

import cls from './BotsConnection.module.scss';

interface BotsConnectionProps {
    className?: string
}

export const BotsConnection = (props: BotsConnectionProps) => {
    const { className } = props;
    const [isModal, setIsModal] = useState(false);

    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsModal(true);
    }, []);

    return (
        <div className={classNames('', {}, [className])}>
            <div
                className={classNames(cls.BotsConnection, {}, [className])}
                onClick={onShowModal}
            >
                <Icon Svg={Bot} className={cls.icon} />
            </div>
            {isModal && (
                <ShowBotsModal
                    onClose={onCloseModal}
                    isOpen={isModal}
                />
            )}
        </div>
    );
};
