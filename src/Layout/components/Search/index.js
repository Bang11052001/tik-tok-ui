import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { PopperWrapper } from '~/Layout/Popper';
import styles from './Search.module.scss';

let cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [isFocusSearchResult, setIsFocusSearchResult] = useState(true);
    const [searchResult, setSearchResult] = useState([123, 1, 1, 1]);
    const inputRef = useRef();

    const handleChange = (value) => {
        setSearchValue(value);
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const hanleClickOutSide = () => {
        setIsFocusSearchResult(false);
    };

    console.log(searchResult);

    return (
        <HeadlessTippy
            interactive
            visible={isFocusSearchResult && searchResult.length > 0}
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
            onClickOutside={hanleClickOutSide}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('search-input')}
                    placeholder="Search accounts and videos"
                    onChange={(e) => handleChange(e.target.value)}
                    onClick={() => setIsFocusSearchResult(true)}
                ></input>
                {searchValue.length > 0 && (
                    <FontAwesomeIcon className={cx('search-clear-btn')} icon={faCircleXmark} onClick={handleClear} />
                )}
                {/* <FontAwesomeIcon className={cx('search-loading-btn')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon
                        fill={searchValue.length > 0 ? 'rgba(22, 24, 35, 0.75)' : 'rgba(22, 24, 35, 0.34)'}
                        className={cx('search-btn-icon')}
                    />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
