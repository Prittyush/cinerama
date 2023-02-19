const loginform = document.getElementById("login-form");
const submitbutton = document.getElementById("login");
var count = 2;

submitbutton.addEventListener("click", (e) => {

    e.preventDefault();
    const username = loginform.uname.value;
    const password = loginform.password.value;
    const un = "movie"
    const ps = "movie"
    var valid = false;
    if (username === un && ps === password) {
        valid = true;
    }
    if (valid) {
        alert("Login was successful");
    } else {

        if (count == 2) {
            alert("Wrong password or username & You have only 2 Tries for login")
            count--;
        } else if (count == 1) {
            alert("Wrong password or username & You have only 1 Tries for login")
            count--;
        } else {
            alert("Incorrect password or username you are now blocked Because so many failed attempts");
            loginform.uname.value = "You are now Blocked";
            loginform.password.value = "You are now Blocked";
            loginform.uname.disabled = true;
            loginform.password.disabled = true;
        }
    }












})