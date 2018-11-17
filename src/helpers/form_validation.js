//Passwords must contain one uppercase letter, one number, one special case letter(!@#$&*) and must be a minimum of 6 characters.
export const checkPassword = string => {
    let regex = new RegExp("^(?=.*[A-Z])(?=.*[!@#$&*.])(?=.*[0-9]).{6,}$");
    return regex.test(string);
};

export const checkEmail = string => {
    const regex = new RegExp("[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.[A-Za-z]");
    return regex.test(string);
};