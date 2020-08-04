import { useEffect } from 'react';
import useRefs from './useRefs';

const useInterval = (callback: Function, delay: number | null) => {
  const current = useRefs<Function>(callback);
  useEffect(() => {
    const tick = () => {
      if (current) {
        current();
      }
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, current]);
};

export default useInterval;
