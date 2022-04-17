import { faUser, faAt, faKey } from '@fortawesome/free-solid-svg-icons';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD,
} from '../utils/validators';
import GoogleIcon from './Icons/Google';
import GDriveIcon from './Icons/GDrive';
import GMailIcon from './Icons/GMail';
import Input from './FormElements/Input';

import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles['registration-form']}>
      <div className={styles.logo}>
        <GMailIcon width="192px" height="146px" />
      </div>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className={`${styles['form-group']} ${styles.horizontal}`}>
          <Input
            type="text"
            placeholder="First Name"
            errorMessage="Required field"
            icon={faUser}
            validators={[VALIDATOR_REQUIRE()]}
            required={true}
          />
          <Input
            type="text"
            placeholder="Last Name"
            errorMessage="Required field"
            icon={faUser}
            validators={[VALIDATOR_REQUIRE()]}
          />
        </div>
        <div className={`${styles['form-group']} ${styles.vertical}`}>
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            errorMessage="Please enter valid e-mail"
            icon={faAt}
            validators={[VALIDATOR_EMAIL()]}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            errorMessage="At least 8 characters, one upper case, one lower case letter, one digit and one special symbol"
            icon={faKey}
            validators={[VALIDATOR_PASSWORD()]}
          />
        </div>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="terms-conditions"
            name="terms-conditions"
          />
          <label htmlFor="terms-conditions">
            I agree with terms and conditions
          </label>
        </div>
        <button type="submit">Sign up</button>
      </form>
      <p>sponsored by</p>
      <div className={styles.links}>
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
