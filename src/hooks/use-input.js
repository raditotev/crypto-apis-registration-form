import { useReducer } from 'react';

import { initialInputReducer, inputReducer } from '../reducers/input-reducer';

const useInput = (customInitialReducer) => {
  const [input, dispatch] = useReducer(inputReducer, {
    ...initialInputReducer,
    ...customInitialReducer,
  });

  return [input, dispatch];
};

export { useInput };
