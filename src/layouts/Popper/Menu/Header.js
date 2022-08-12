import styles from './Menu.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header({ item, onBack }) {
    return (
        <div className={cx('menu-header')}>
            <span className={cx('menu-header-icon')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
            </span>
            <p className={cx('menu-header-title')}>{item.title}</p>
        </div>
    );
}

export default Header;
