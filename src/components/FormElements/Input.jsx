import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useInput } from '../../hooks/use-input';
import { actionTypes } from '../../reducers/input-reducer';

import styles from './Input.module.css';
import { useEffect } from 'react';

const Input = ({
  icon,
  iconSize = 'xl',
  errorMessage,
  validator,
  className,
  reset,
  ...props
}) => {
  const [input, dispatch] = useInput();
  const [isFocused, setIsFocused] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    dispatch({ type: actionTypes.RESET });
  }, [dispatch, reset]);

  if (input.isValid) {
    // Remove 'invalid' class if it was applied because of empty form submission
    divRef.current.classList.remove('invalid');
  }

  const changeHandler = (e) => {
    const value = e.target.value;
    dispatch({
      type: actionTypes.CHANGE,
      value,
      validator,
    });
  };

  const blurHandler = () => {
    dispatch({
      type: actionTypes.TOUCH,
      isTouched: true,
    });
    setIsFocused(false);
  };

  const focusHandler = () => {
    setIsFocused(true);
  };

  return (
    <div
      ref={divRef}
      className={`
      ${styles.input}
      ${!input.isValid && input.isTouched ? 'invalid' : ''}
      ${className}
      `}
      data-testid="form-input"
    >
      <span
        className={`${styles.icon} ${isFocused ? styles.focused : ''} ${
          input.isValid ? 'valid' : ''
        }`}
      >
        <FontAwesomeIcon icon={icon} size={iconSize} />
      </span>
      <input
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
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
