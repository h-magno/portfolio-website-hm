import { useRef, useEffect } from 'react';import './Cursor.css';

const Cursor = () => {
  const dot: any = useRef(null);
  const delay = 5;
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(-20);
  const endY = useRef(-20);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef: any = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);
      cancelAnimationFrame(requestRef.current)
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorVisible.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1.1)';
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };
  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };
  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e: any) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dot.current.style.top = _y.current + 'px';
    dot.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={dot} className="customCursor"></div>
    </>
  );
};

export default Cursor;
