export const validateName = (name: string) => {
  let validation = "";
  const regexName = /^[A-Za-z\s]{3,}$/;  
  if (!regexName.test(name)) {
    validation = "Must be at least 3 characters and only letters.";
  }
  return validation;
};

  export const validateEmail = (email: string) => {
    let validation = "";
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) validation = "Must be a valid email";
    return validation;
  };
  
  export const validatePassword = (password: string) => {
    let validation = "";
    const regexPassword = /^(?=.*[A-Za-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regexPassword.test(password))
      validation = "Must be at least 8 characters, one special character, one number, and one letter.";
    return validation;
  };
  
  export const validateAddress = (address: string) => {
    let validation = "";
    const regexAddress = /.{8}/;
    if (!regexAddress.test(address))
      validation = "Must be at least 8 characters.";
    return validation;
  };
  
  export const validatePhone = (phone: string) => {
    let validation = "";
    const regexPhone = /^[0-9]{10}$/; 
    if (!regexPhone.test(phone))
      validation = "Must be a valid phone number with 10 digits.";
    return validation;
  };
  

