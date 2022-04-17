import styles from './FormGroup.module.css';

const FormGroup = ({ horizontal, children }) => {
  return (
    <div
      className={`${styles['form-group']} ${
        horizontal ? styles.horizontal : styles.vertical
      }`}
    >
      {children}
    </div>
  );
};

export default FormGroup;
