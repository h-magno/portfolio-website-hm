import { useEffect, useMemo } from 'react';
import Scrollbar from 'smooth-scrollbar';

const options = {
  damping: 0.05,
};

function SmoothScroll() {
  return <></>;
  useMemo(() => {
    setTimeout(() => {
      Scrollbar.init(document.body, options);
    }, 5000);
  }, []);
  return null;
}

export default SmoothScroll;
