import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { logo } from '~/assets/images/index';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/layouts/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
import config from '~/config';

let cx = classNames.bind(styles);

function Header() {
    const user = true;
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
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img className="logo" src={logo} alt="tiktok" />
                </Link>
                <Search />
                <div className={cx('option')}>
                    <Button outline outlineDark>
                        Upload
                    </Button>
                    {user ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('option-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('option-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>

                            <Menu menuItems={userMenu}>
                                <Image
                                    alt="avatar"
                                    className={cx('option-avatar')}
                                    src=""
                                    fallback="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
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
