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

import { logo } from '~/assets/images/index';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/Layout/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';

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
                <img className="logo" src={logo} alt="tiktok" />
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
                                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7127610606139473926~c5_720x720.jpeg?x-expires=1659697200&x-signature=rnXpXNDy7J056e7oUd6FArdn%2BBI%3D"
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
