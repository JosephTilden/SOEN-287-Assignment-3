/*
Give away a pet form
 */
const giveAwayPetForm = document.getElementById("giveAwayPetForm");
giveAwayPetForm.addEventListener("submit", function(event) {
  // Get elements
  const petType = document.querySelector('input[name="pet-type"]:checked')?.value || null;
  const breed = document.getElementById("breed1").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || null;
  const elevatorPitch = document.getElementById("petElevatorPitch").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  console.log(email)

  // Check that inputs are valid
  let fieldsAreFull = true;
  let fieldsToTest = [petType, breed, age, gender, elevatorPitch, firstName, lastName, email];
  for (let field of fieldsToTest) {
    if (isEmpty(field)) {
      fieldsAreFull = false;
    }
  }
  if (!fieldsAreFull) {
    event.preventDefault();
    window.alert("One or more fields is incomplete!");
  }

  // check email
  if (!isValidEmail(email)) {
    event.preventDefault();
    window.alert("Invalid email!")
  }
});


/**
 * From https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
 */
function isValidEmail(email) {
  console.log(email)
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}
