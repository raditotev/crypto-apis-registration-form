import styles from './Checkbox.module.css';

const Checkbox = ({ label }) => {
  const clickHandler = (e) => {
    e.target.parentElement.style = '--checkbox-border-colour: #c9c9c9;';
  };

  return (
    <div className={styles.checkbox}>
      <input
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
