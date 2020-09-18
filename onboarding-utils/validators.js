const dateVal = '^\\d{1,2}/\\d{1,2}/\\d{4}$';
const passwordVal = '.{6,}';
const emailVal =
  '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])';

export const identifiers = (validation) => {
  return {
    isEmail: validation === emailVal,
    isDate: validation === dateVal,
    isPassword: validation === passwordVal,
    isPicker: validation.toString() === 'past week,past month,longer',
  };
};

export const validateEmail = (email) => {
  if (!email) {
    return {
      valid: false,
      message: 'Please enter a valid email address.',
    };
  }
  return {
    valid: email.match(emailVal),
    message: 'Please enter a valid email address.',
  };
};

export const validateDate = (date) => {
  if (!date) {
    return {
      valid: false,
      message: 'Please enter a valid date.',
    };
  }
  return {
    valid: date.match(dateVal),
    message: 'Please enter a valid date.',
  };
};
export const validatePicker = (selectedValue) => {
  if (!selectedValue) {
    return {
      valid: false,
      message: 'Please select a provided period of time.',
    };
  }
  return {
    valid:
      selectedValue === 'past week' ||
      selectedValue === 'past month' ||
      selectedValue === 'longer',
    message: 'Please select a provided period of time.',
  };
};

export const validatePassword = (password) => {
  if (!password) {
    return {
      valid: false,
      message: 'A password must be atleast 6 characters.',
    };
  }
  return {
    valid: password.match(passwordVal),
    message: 'A password must be atleast 6 characters.',
  };
};

export const validateDefault = (string) => {
  return {valid: true};
};
