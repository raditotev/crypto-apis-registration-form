import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useInput } from '../../hooks/use-input';
import { actionTypes } from '../../store/input-reducer';

import styles from './Input.module.css';
import { useEffect } from 'react';

const Input = ({
  icon,
  iconSize = 'lg',
  errorMessage,
  validator,
  className,
  reset,
  ...props
}) => {
  const [input, dispatch] = useInput();
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
  };

  return (
    <div
      ref={divRef}
      className={`
      ${styles.input}
      ${className}
      ${!input.isValid && input.isTouched ? 'invalid' : null}
      `}
      data-testid="form-input"
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
