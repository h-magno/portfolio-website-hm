import { useEffect, useMemo } from 'react';
import Scrollbar from 'smooth-scrollbar';

var options = {
    damping: 0.05
};

const SmoothScroll = () => {
    return<></>
    useMemo(() => {
        setTimeout(() => {
            Scrollbar.init(document.body, options);
        }, 5000);
    }, []);
    return null;
};

export default SmoothScroll;
