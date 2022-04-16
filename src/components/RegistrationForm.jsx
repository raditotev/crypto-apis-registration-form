import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt, faKey } from '@fortawesome/free-solid-svg-icons';

import GoogleIcon from './Icons/Google';
import GDriveIcon from './Icons/GDrive';
import GMailIcon from './Icons/GMail';

const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <h3>Sign Up</h3>
      <form>
        <div className="form-group-horizontal">
          <div>
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="First Name" />
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-group-vertical">
          <div>
            <FontAwesomeIcon icon={faAt} />
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <FontAwesomeIcon icon={faKey} />
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div class="form-check">
          <label class="form-check-label" for="terms-conditions">
            <input type="checkbox" id="terms-conditions" />I agree with terms
            and conditions
          </label>
        </div>
        <button>SIgn up</button>
      </form>
      <p>sponsored by</p>
      <div>
        <a href="http://">
          <GoogleIcon />
        </a>
        <a href="http://">
          <GDriveIcon />
        </a>
        <a href="http://">
          <GMailIcon />
        </a>
      </div>
      <p>
        Already have an account? <a href="http://">Sign in</a>
      </p>
    </div>
  );
};

export default RegistrationForm;
