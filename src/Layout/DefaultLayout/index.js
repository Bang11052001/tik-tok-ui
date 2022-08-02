import classNames from 'classnames/bind';

import Sidebar from './Sidebar';
import Header from '~/Layout/components/Header';
import styles from './DefaultLayout.module.scss';

let cx = classNames.bind(styles);

function DefaultLayout({ children }) {
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

export default DefaultLayout;
