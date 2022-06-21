import { useSelector } from 'react-redux';

export const selectorHookFactory = module => selector =>
  useSelector(state =>
    selector.split('.').reduce((acc, key) => {
      try {
        return acc[key];
      } catch (error) {
        throw new Error('[selectorHookFactory] Invalid selector');
      }
    }, state[module])
  );
