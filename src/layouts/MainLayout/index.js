import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

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

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
