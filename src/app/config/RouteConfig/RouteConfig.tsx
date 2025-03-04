import { RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
import { CIWPage } from 'pages/CIWPage/CIWPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export const RouteConfig: RouteObject[] = [
    {
        path: '/',
        element: <Suspense fallback='Loading...'><CIWPage /></Suspense>,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
