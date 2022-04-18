import { useRef } from 'react';
import { useEffect } from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, reset }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.checked = false;
  }, [reset]);

  const clickHandler = (e) => {
    // Clear validation error from form submission
    e.target.parentElement.style = '--checkbox-border-colour: #c9c9c9;';
  };

  return (
    <div className={styles.checkbox}>
      <input
        ref={inputRef}
        type="checkbox"
        id="terms-conditions"
        name="terms-conditions"
        onClick={clickHandler}
      />
      <label htmlFor="terms-conditions">{label}</label>
    </div>
  );
};

export default Checkbox;
