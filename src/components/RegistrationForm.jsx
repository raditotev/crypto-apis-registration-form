import { faUser, faAt, faKey } from '@fortawesome/free-solid-svg-icons';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD,
  validate,
} from '../utils/validators';
import GoogleIcon from './Icons/Google';
import GDriveIcon from './Icons/GDrive';
import GMailIcon from './Icons/GMail';
import Input from './FormElements/Input';
import Checkbox from './FormElements/Checkbox';
import FormGroup from './FormElements/FormGroup';
import Button from './FormElements/Button';

import styles from './RegistrationForm.module.css';

const validateField = (element, validator) => {
  if (!validate(element.value, validator)) {
    element.parentElement.classList.add('invalid');
    return false;
  }
  return true;
};

const RegistrationForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const name = e.target.elements.name;
    const surname = e.target.elements.surname;
    const email = e.target.elements.email;
    const password = e.target.elements.password;
    const checkbox = e.target.elements['terms-conditions'];

    const validName = validateField(name, VALIDATOR_REQUIRE());
    const validSurname = validateField(surname, VALIDATOR_REQUIRE());
    const validEmail = validateField(email, VALIDATOR_EMAIL());
    const validPassword = validateField(password, VALIDATOR_PASSWORD());
    const validCheckbox =
      checkbox.checked ||
      (checkbox.parentElement.style = '--checkbox-border-colour: #ea4335;');

    if (
      validName &&
      validSurname &&
      validEmail &&
      validPassword &&
      validCheckbox
    ) {
      console.log({
        name: name.value,
        surname: surname.value,
        email: email.value,
        password: password.value,
        checkbox: checkbox.checked,
      });
    }
  };

  return (
    <div className={styles['registration-form']}>
      <div className={styles.logo}>
        <GMailIcon width="192px" height="146px" />
      </div>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <FormGroup horizontal>
          <Input
            id="name"
            type="text"
            placeholder="First Name"
            errorMessage="Required field"
            icon={faUser}
            validator={VALIDATOR_REQUIRE()}
          />
          <Input
            id="surname"
            type="text"
            placeholder="Last Name"
            errorMessage="Required field"
            icon={faUser}
            validator={VALIDATOR_REQUIRE()}
          />
        </FormGroup>
        <FormGroup vertical>
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            errorMessage="Please enter valid e-mail"
            icon={faAt}
            validator={VALIDATOR_EMAIL()}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            errorMessage="At least 8 characters, one upper case, one lower case letter, one digit and one special symbol"
            icon={faKey}
            validator={VALIDATOR_PASSWORD()}
          />
        </FormGroup>
        <Checkbox label="I agree with terms and conditions" />
        <Button type="submit">Sign up</Button>
      </form>
      <p>sponsored by</p>
      <div className={styles.links}>
        <Button href="http://">
          <GoogleIcon width="24px" height="24px" />
        </Button>
        <Button href="http://">
          <GDriveIcon width="29px" height="26px" />
        </Button>
        <Button href="http://">
          <GMailIcon width="34px" height="25px" />
        </Button>
      </div>
      <p className={styles.signin}>
        Already have an account? <a href="http://">Sign in</a>
      </p>
    </div>
  );
};

export default RegistrationForm;
