const fs = require("node:fs");

const signUpForm = document.forms["signUpForm"];
signUpForm.addEventListener("submit", (event) => {
  const username = signUpForm["username"];
  const password = signUpForm["password"];

  if (/[^A-Za-z0-9]/.test(username)) {
    alert("Invalid username. How tragic!");
    event.preventDefault();
  } else if (password.length < 4 || !/\d/.test(password) || !/\w/.test(password)) {
    alert("Invalid password. Not so secretive, are we?");
    event.preventDefault();
    }
})

// const loginForm = document.forms["loginForm"];
// loginForm.addEventListener("submit", (event) => {
//   const username = signUpForm["username"];
//   const password = signUpForm["password"];
//
//
// })
