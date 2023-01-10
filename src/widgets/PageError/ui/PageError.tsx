import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <Text
                className={cls.links}
                text={t('setTheUnknownProblem')}
                size={TextSize.L}
                weight="bold"
                theme={TextTheme.PRIMARY}
            />
            <Button onClick={reloadPage} type="button">
                {t('refreshSite')}
            </Button>
        </div>
    );
};
