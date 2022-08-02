import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import { PopperWrapper } from '../../Popper';

const cx = classNames.bind(styles);

function Menu({ data }) {
    return (
        <PopperWrapper className={cx('menu-popper')}>
            <div className={cx('menu-list')}>
                {data.map((curr, index) => (
                    <MenuItem item={curr} key={index} />
                ))}
            </div>
        </PopperWrapper>
    );
}

export default Menu;
