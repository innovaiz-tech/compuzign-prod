import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = (smooth = true) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, [pathname, smooth]);
};

export default useScrollToTop;