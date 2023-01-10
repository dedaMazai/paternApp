/* eslint-disable react/jsx-one-expression-per-line */
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ShowBotsWindow.module.scss';

interface Bot {
    name: string;
    status: boolean;
}

interface ShowBotsWindowProps {
    className?: string;
    bot?: Bot[];
}

export const ShowBotsWindow = (props: ShowBotsWindowProps) => {
    const { className, bot } = props;
    const { t } = useTranslation();

    const mokBot = [{
        name: 'First',
        status: true,
    },
    {
        name: 'First',
        status: false,
    }];

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {mokBot && mokBot.length > 0
                ? mokBot.map((bot, index) => (
                    <div className={cls.BotWrapper} key={index}>
                        <div>{bot.name}:</div>
                        <div className={cls.BotStatus}>
                            {bot.status ? 'online' : 'offline'}
                            <div className={classNames(cls.CircleStatus, { [cls.active]: bot.status }, [className])} />
                        </div>
                    </div>
                ))
                : 'Ботов нет'}
        </div>
    );
};
