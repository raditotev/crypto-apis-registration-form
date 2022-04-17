const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_PASSWORD = 'PASSWORD';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_PASSWORD = () => ({ type: VALIDATOR_TYPE_PASSWORD });

export const validate = (value, validator) => {
  switch (validator.type) {
    case VALIDATOR_TYPE_REQUIRE:
      return value.trim().length > 0;
    case VALIDATOR_TYPE_EMAIL:
      return /^\S+@\S+\.\S+$/.test(value);
    case VALIDATOR_TYPE_PASSWORD:
      return value.trim().length > 0;
    default:
      throw new Error(`Invalid validator type ${validator.type}`);
  }
};
