import { Home, Following, Upload } from '~/pages';
import { MainLayout, HeaderOnly } from '~/layouts';
import config from '~/config';

const publicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following, layout: HeaderOnly },
    { path: config.routes.upload, component: Upload, layout: MainLayout },
];

const privateRoute = [];

export { privateRoute, publicRoute };

ádfasdf;
ádfasdf;
ádfasdfsa;
