import { useReducer } from 'react';

import { initialInputReducer, inputReducer } from '../store/input-reducer';

const useInput = (customInitialReducer) => {
  const [input, dispatch] = useReducer(inputReducer, {
    ...initialInputReducer,
    ...customInitialReducer,
  });

  return [input, dispatch];
};

export { useInput };
