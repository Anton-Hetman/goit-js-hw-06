const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    e.target.elements.email.value.length === 0 ||
    e.target.elements.password.value.length === 0
  ) {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const users = {};

    users.password = e.target.elements.password.value;
    users.email = e.target.elements.email.value;

    console.log(users);
    loginForm.reset();
  }
});
