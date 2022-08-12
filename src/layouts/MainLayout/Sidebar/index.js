import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

let cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('side-bar')}>
            <h2>sidebar</h2>
        </div>
    );
}

export default Sidebar;
