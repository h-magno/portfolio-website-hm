import { useEffect } from 'react';

import Scrollbar from 'smooth-scrollbar'

var options = {
    damping: 0.1,
}

const SmoothScroll = () => {
    return<></>
    useEffect(() => {

        Scrollbar.init(document.body, options);


    }, [])
    return null
};

export default SmoothScroll;
