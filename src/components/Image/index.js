import { forwardRef, useState } from 'react';
import { noAvatar } from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, fallback = noAvatar, ...props }, ref) {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
    };

    return <img src={_fallback || src} alt={alt} {...props} ref={ref} onError={handleError} />;
}

export default forwardRef(Image);
