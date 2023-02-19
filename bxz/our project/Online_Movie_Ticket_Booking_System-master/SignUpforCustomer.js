const signupform = document.getElementById("signup-form");
const submitbutton = document.getElementById("signup");
submitbutton.addEventListener("click", (e) => {

    e.preventDefault();

    var uname = signupform.uname.value;
    var pass = signupform.password.value;
    var repass = signupform.repassword.value;
    var gender = signupform.gender.value;
    var mno = signupform.mno.value;
    var email = signupform.email.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var letters = /^[A-Za-z]+$/;

    if (pass != repass) {
        alert("Passsword and Repassword are not matching!!");
        repass.focus();
    }
    if (uname && pass && repass && gender && mno && email) {
        alert("Data Added Successfully");
    }

    alert("Please fill full form");

});