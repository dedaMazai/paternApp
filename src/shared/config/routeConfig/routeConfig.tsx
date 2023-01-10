import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';
import { BalancePage } from '@/pages/BalancePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AllOrdersPage } from '@/pages/AllOrdersPage';

export type AppRoutersProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}

export enum AppRouters {
  MAIN = 'main',
  BALANCE = 'balance',
  ALL_ORDERS = 'allOrders',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ALL_ORDERS]: '/allOrders',
    [AppRouters.BALANCE]: '/balance',
    [AppRouters.FORBIDDEN]: '/forbidden',
    // last
    [AppRouters.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouters, AppRoutersProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRouters.ALL_ORDERS]: {
        path: RoutePath.allOrders,
        element: <AllOrdersPage />,
    },
    [AppRouters.BALANCE]: {
        path: RoutePath.balance,
        element: <BalancePage />,
    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRouters.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
        authOnly: true,
    },
};
