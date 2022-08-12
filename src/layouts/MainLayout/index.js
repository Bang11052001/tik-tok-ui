import classNames from 'classnames/bind';

import Sidebar from './Sidebar';
import Header from '~/layouts/components/Header';
import styles from './MainLayout.module.scss';

let cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </>
    );
}

export default MainLayout;
