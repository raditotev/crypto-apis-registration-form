import { useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { validate } from '../../utils/validators';

import styles from './Input.module.css';

const initialReducer = {
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
        isValid: validate(action.value, action.validators),
      };
    case actionTypes.TOUCH:
      return { ...state, isTouched: true };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};

const Input = ({
  icon,
  iconSize = 'lg',
  errorMessage,
  validators,
  className,
  ...props
}) => {
  const [input, dispatch] = useReducer(inputReducer, initialReducer);

  const changeHandler = (e) => {
    const value = e.target.value;
    dispatch({
      type: actionTypes.CHANGE,
      value,
      validators,
    });
  };

  const blurHandler = () => {
    dispatch({
      type: actionTypes.TOUCH,
      isTouched: true,
    });
  };

  return (
    <div
      className={`
      ${styles.input}
      ${!input.isValid && input.isTouched && 'invalid'}
      ${className}`}
    >
      <FontAwesomeIcon icon={icon} size={iconSize} />
      <input
        onChange={changeHandler}
        onBlur={blurHandler}
        value={input.value}
        {...props}
      />
      {!input.isValid && input.isTouched ? (
        <span className={styles['error-message']}>{errorMessage}</span>
      ) : null}
    </div>
  );
};

export default Input;