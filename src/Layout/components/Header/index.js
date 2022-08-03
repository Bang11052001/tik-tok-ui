import {
    faMagnifyingGlass,
    faCircleXmark,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import { faPaperPlane, faMessage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';

import { logo } from '~/assets/images/index';
import styles from './Header.module.scss';
import { PopperWrapper } from '~/Layout/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/Layout/Popper/Menu';
let cx = classNames.bind(styles);

function Header() {
    const user = false;
    const optionMenu = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
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

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...optionMenu,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <img className="logo" src={logo.logo} alt="tiktok" />
                <div>
                    <HeadlessTippy
                        interactive
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
                    </HeadlessTippy>
                </div>
                <div className={cx('option')}>
                    <Button outline outlineDark>
                        Upload
                    </Button>
                    {user ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('option-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>

                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('option-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>

                            <Menu menuItems={userMenu}>
                                <img
                                    alt="avatar"
                                    className={cx('option-avatar')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7127610606139473926~c5_720x720.jpeg?x-expires=1659697200&x-signature=rnXpXNDy7J056e7oUd6FArdn%2BBI%3D"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary>Sign in</Button>

                            <Menu menuItems={optionMenu}>
                                <div className={cx('menu-icon')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;