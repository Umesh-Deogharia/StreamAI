const ValidData = (email, password, name) => {
    console.log("email",email);
    console.log("password", password);
    console.log("name",name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(name);
    if (!isEmailValid) return "Email is not Valid";
    if (!isPasswordValid) return "Password is not Valid";
    if (!isNameValid) return "Name is not Valid";
    return null;
}
export default ValidData;