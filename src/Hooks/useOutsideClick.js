import { useEffect } from 'react';

const useOutsideClick = (ref, onOutsideClick) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useOutsideClick;
