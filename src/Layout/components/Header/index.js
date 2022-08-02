import {
    faMagnifyingGlass,
    faCircleXmark,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { logo } from '~/assets/images/index';
import styles from './Header.module.scss';
import { PopperWrapper } from '~/Layout/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/Layout/Popper/Menu';

let cx = classNames.bind(styles);

function Header() {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <img className="logo" src={logo.logo} alt="tiktok" />
                <div>
                    <Tippy
                        interactive
                        visible
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input
                                className={cx('search-input')}
                                type="text"
                                placeholder="Search accounts and videos"
                            ></input>
                            <FontAwesomeIcon className={cx('search-clear-btn')} icon={faCircleXmark} />
                            {/* <FontAwesomeIcon className={cx('search-loading-btn')} icon={faSpinner} /> */}
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon
                                    className={cx('search-btn-icon')}
                                    icon={faMagnifyingGlass}
                                ></FontAwesomeIcon>
                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('option')}>
                    <Button outline outlineDark>
                        Upload
                    </Button>
                    <Button primary>Sign in</Button>
                    <Tippy
                        interactive
                        delay={[0, 700]}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('')} tabIndex="-1" {...attrs}>
                                <Menu data={MENU_ITEMS}></Menu>
                            </div>
                        )}
                    >
                        <div className={cx('menu-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
