import styles from './Button.module.css';

const Button = (props) => {
  if (props.type) {
    return (
      <button className={styles.button} {...props}>
        {props.children}
      </button>
    );
  }

  if (props.href) {
    return (
      <a href="http://" className={styles.link}>
        {props.children}
      </a>
    );
  }
};

export default Button;
