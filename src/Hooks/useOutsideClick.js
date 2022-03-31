import { useEffect } from 'react';

const useOutsideClick = (ref, onOutsideClick) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick();
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  });
};

export default useOutsideClick;
