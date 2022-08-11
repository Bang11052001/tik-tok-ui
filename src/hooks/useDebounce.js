import { useEffect, useState } from 'react';

function useDebouce(value, delay) {
    const [deBounceValue, setdeBounce] = useState(value);

    useEffect(() => {
        var timeId = setTimeout(() => setdeBounce(value), delay);

        return () => clearTimeout(timeId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return deBounceValue;
}

export default useDebouce;
