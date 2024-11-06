
 export const checkValidData=(email,password,name)=>{
    const isfullName = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name);
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isfullName) return "Either You are not entering a valid name or Try Entering full name";
    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
    return null;
};

 