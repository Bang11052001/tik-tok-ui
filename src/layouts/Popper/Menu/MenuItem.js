import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    const classes = cx('menu-item', { separate: item.separate });
    return (
        <Button className={classes} iconLeft={item.icon} to={item.to} onClick={onClick}>
            {item.title}
        </Button>
    );
}

MenuItem.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItem;
