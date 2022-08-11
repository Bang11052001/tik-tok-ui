import { Home, Following, Upload } from '~/pages';
import { DefaultLayout, HeaderOnly } from '~/Layout';
import config from '~/config';

const publicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following, layout: HeaderOnly },
    { path: config.routes.upload, component: Upload, layout: DefaultLayout },
];

const privateRoute = [];

export { privateRoute, publicRoute };
