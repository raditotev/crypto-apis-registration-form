import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt, faKey } from '@fortawesome/free-solid-svg-icons';

import GoogleIcon from './Icons/Google';
import GDriveIcon from './Icons/GDrive';
import GMailIcon from './Icons/GMail';

import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <div className={styles['registration-form']}>
      <div className={styles.logo}>
        <GMailIcon width="192px" height="146px" />
      </div>
      <h1>Sign Up</h1>
      <form>
        <div className={`${styles['form-group']} ${styles.horizontal}`}>
          <div className={styles.input}>
            <FontAwesomeIcon icon={faUser} size="lg" />
            <input type="text" placeholder="First Name" />
          </div>
          <div className={styles.input}>
            <FontAwesomeIcon icon={faUser} size="lg" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className={`${styles['form-group']} ${styles.vertical}`}>
          <div className={styles.input}>
            <FontAwesomeIcon icon={faAt} size="lg" />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              id="email"
            />
          </div>
          <div className={styles.input}>
            <FontAwesomeIcon icon={faKey} size="lg" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
        </div>
        <div className={styles['form-check']}>
          <input
            type="checkbox"
            id="terms-conditions"
            name="terms-conditions"
          />
          <label for="terms-conditions">
            I agree with terms and conditions
          </label>
        </div>
        <button>Sign up</button>
      </form>
      <p>sponsored by</p>
      <div class={styles.links}>
        <a href="http://">
          <GoogleIcon width="24px" height="24px" />
        </a>
        <a href="http://">
          <GDriveIcon width="29px" height="26px" />
        </a>
        <a href="http://">
          <GMailIcon width="34px" height="25px" />
        </a>
      </div>
      <p className={styles.signin}>
        Already have an account? <a href="http://">Sign in</a>
      </p>
    </div>
  );
};

export default RegistrationForm;
