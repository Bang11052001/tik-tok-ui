import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    primary = false,
    outline = false,
    outlineDark = false,
    sm = false,
    block = false,
    outlinePrimary = false,
    rounded,
    children,
    iconLeft,
    iconRight,
    to,
    href,
    disabled = false,
    className,
    onClick,
}) {
    let Comp = 'button';

    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const clases = {
        primary,
        outline,
        'outline-dark': outlineDark,
        'outline-primary': outlinePrimary,
        'btn-sm': sm,
        'btn-block': block,
        rounded,
        disabled,
        [className]: className,
    };

    return (
        <Comp {...props} className={cx('btn', { ...clases })}>
            {iconLeft && <span className={cx('iconLeft')}>{iconLeft}</span>}
            {children}
            {iconRight && <span className={cx('iconRight')}>{iconRight}</span>}
        </Comp>
    );
}

export default Button;
