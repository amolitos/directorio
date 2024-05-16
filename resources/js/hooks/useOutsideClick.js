import React from 'react';

export const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('dblclick', handleClick, true);

    return () => {
      document.removeEventListener('dblclick', handleClick, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return ref;
};
