/*
Find a Pet Form
 */
const findAPetForm = document.forms["findAPetForm"];
findAPetForm.addEventListener("submit", function(event) {
  // Get elements
  const petType = findAPetForm["pet-type"].value;
  const breed = findAPetForm["breed"].value;
  const noBreedPreference = findAPetForm["noBreedPreference"].checked;
  const minAge = findAPetForm["min-age"].value;
  const maxAge = findAPetForm["max-age"].value;
  const noAgePreference = findAPetForm["noAgePreference"].checked;
  const gender = findAPetForm["gender"].value;
  const noGenderPreference = findAPetForm["noGenderPreference"].checked;
  const otherDogs = findAPetForm["otherDogs"].checked;
  const otherCats = findAPetForm["otherCats"].checked;
  const smallChildren = findAPetForm["smallChildren"].checked;
  const noGetsAlongPreference = findAPetForm["noGetsAlongPreference"].checked;

  // const petType = document.querySelector('input[name="pet-type"]:checked')?.value || null;
  // const breed = document.getElementById("breed1").value;
  // const noBreedPreference = document.getElementById("noBreedPreference").checked;
  // const minAge = document.getElementById("min-age").value;
  // const maxAge = document.getElementById("max-age").value;
  // const noAgePreference = document.getElementById("noAgePreference").checked;
  // const gender = document.querySelector('input[name="gender"]:checked')?.value || null;
  // const noGenderPreference = document.getElementById("noGenderPreference").checked;
  // const otherDogs = document.getElementById("otherDogs").checked;
  // const otherCats = document.getElementById("otherCats").checked;
  // const smallChildren = document.getElementById("smallChildren").checked;
  // const noGetsAlongPreference = document.getElementById("noGetsAlongPreference").value;

  console.log(petType)
  console.log(noBreedPreference)
  console.log(breed)

  // Check that  inputs are valid
  let fieldsAreFull = true;
  if (isEmpty(petType) ||
    isEmpty(breed) && !noBreedPreference ||
    isEmpty(maxAge) && isEmpty(minAge) && !noAgePreference ||
    isEmpty(gender)  && !noGenderPreference
  ) {
    event.preventDefault();
    window.alert("One or more fields is incomplete!");
  }
});
