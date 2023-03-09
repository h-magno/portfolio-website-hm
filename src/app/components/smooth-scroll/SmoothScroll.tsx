import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

var options = {
    damping: 0.1
};

const SmoothScroll = () => {
    // return<></>
    useEffect(() => {
        setTimeout(() => {
            Scrollbar.init(document.body, options);
        }, 1000);
    }, []);
    return null;
};

export default SmoothScroll;
