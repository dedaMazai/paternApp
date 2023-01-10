import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/shared/ui/PageLoader';
import { getUserInited, userActions } from '@/entities/User';
import { BotsConnection } from '@/features/BotsConnection/ui/BotsConnection/BotsConnection';

export const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    {inited && (
                        <>
                            <AppRouter />
                            <BotsConnection />
                        </>
                    )}
                </div>
            </Suspense>
        </div>
    );
};
