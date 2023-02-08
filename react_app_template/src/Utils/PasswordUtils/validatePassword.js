/*Pending Function*/

//Toggle Eye Password
export const hideshowPassWord = () => {
  let password = this.parentNode.childNodes[1];
  let type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
};

//Check Validate Email
export const checkValidateEmail = () => {
  let email = document.querySelector("#email");
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    console.log("%cĐịa chỉ email hợp lệ!!!", "color: lightgreen");
    email.style.border = "3px solid green";
    return true;
  } else {
    console.log("%cĐịa chỉ email KHÔNG hợp lệ!!!", "color: red");
    email.style.border = "3px solid red";
    return false;
  }
};

//Check First Name
export const checkFirstName = () => {
  let firstName = document.querySelector("#firstName");

  if (firstName.value != "") {
    console.log(`%cFirst Name field is OK`, "color: lightgreen");
    firstName.style.border = "3px solid green";
    return true;
  } else {
    console.log(`%cFirst Name field can't empty`, "color: red");
    firstName.style.border = "3px solid red";
    return false;
  }
};

//Check Last Name
export const checkLastName = () => {
  let lastName = document.querySelector("#lastName");

  if (lastName.value != "") {
    console.log(`%cLast Name field is OK`, "color: lightgreen");
    lastName.style.border = "3px solid green";
    return true;
  } else {
    console.log(`%cLast Name field can't empty`, "color: red");
    lastName.style.border = "3px solid red";
    return false;
  }
};

//Check Mobile Phone
export const checkMobilePhone = () => {
  let phone = document.querySelector("#phone");
  if (phone.value != "") {
    console.log(`%cPhone field is OK`, "color: lightgreen");
    phone.style.border = "3px solid green";
    return true;
  } else {
    console.log(`%cPhone field can't empty`, "color: red");
    phone.style.border = "3px solid red";
    return false;
  }
};

//Check Password
export const checkPassword = () => {
  let password = document.querySelector("#password");
  let decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  if (password.value.match(decimal)) {
    console.log("%cPassword is OK", "color: lightgreen");
    password.style.border = "3px solid green";
    checkRepassword();
    return true;
  } else {
    console.log(
      "%c*Require a-z, A-Z, 0-9, Special char, and length 8-20",
      "color: red"
    );
    password.style.border = "3px solid red";
    checkRepassword();
    return false;
  }
};

//Check Re-password
export const checkRepassword = () => {
  let password = document.querySelector("#password");
  let rePassword = document.querySelector("#rePassword");
  if (password.value == rePassword.value) {
    console.log("%cPasswords match!", "color: lightgreen");
    rePassword.style.border = "3px solid green";
    return true;
  } else {
    console.log("%cPasswords do NOT match!", "color: red");
    rePassword.style.border = "3px solid red";
    return false;
  }
};
