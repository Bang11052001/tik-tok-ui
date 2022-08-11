import { useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { PopperWrapper } from '../../Popper';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ menuItems, children }) {
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
        <HeadlessTippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {menu.length > 1 && <Header item={current} onBack={onBack} />}
                        <div className={cx('menu-list')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setMenu((prev) => prev.slice(0, 1))}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
