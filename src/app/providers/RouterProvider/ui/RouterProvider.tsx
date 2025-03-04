import { RouteConfig } from 'app/config/index';

import { useRoutes } from 'react-router-dom';

export const AppRouter = () => {
    const elementRoutes = useRoutes(RouteConfig);

    return elementRoutes;
};
