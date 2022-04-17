import { validate } from '../utils/validators';

const initialInputReducer = {
  value: '',
  isValid: false,
  isTouched: false,
};

const actionTypes = {
  CHANGE: 'CHANGE',
  TOUCH: 'TOUCH',
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validator),
      };
    case actionTypes.TOUCH:
      return { ...state, isTouched: true };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};

export { actionTypes, initialInputReducer, inputReducer };
