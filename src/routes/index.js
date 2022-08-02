import { Home, Following, Upload } from '~/pages';
import { DefaultLayout, HeaderOnly } from '~/Layout';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: DefaultLayout },
];

const privateRoute = [];

export { privateRoute, publicRoute };
