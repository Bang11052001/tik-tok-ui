import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { PopperWrapper } from '../../Popper';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ menuItems }) {
    const [menu, setMenu] = useState([{ data: [...menuItems] }]);
    const current = menu[menu.length - 1];

    const onClick = (curr) => {
        if (curr.children) {
            setMenu((prev) => [...prev, curr.children]);
        }
    };

    const onBack = () => {
        if (menu.length > 1) {
            setMenu((prev) => prev.slice(0, prev.length - 1));
        }
    };

    const renderItems = () => {
        var menuItems = current.data.map((curr, index) => {
            return <MenuItem item={curr} key={index} onClick={() => onClick(curr)} />;
        });
        return menuItems;
    };

    return (
        <PopperWrapper className={cx('menu-popper')}>
            {menu.length > 1 && <Header item={current} onBack={onBack} />}
            <div className={cx('menu-list')}>{renderItems()}</div>
        </PopperWrapper>
    );
}

export default Menu;
