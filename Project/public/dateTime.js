/*
Date and Time
 */
const dtElement = document.getElementById("dateTime");

function getCurrentDateTime() {
  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} (Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()})`;
}

function initialiseDateTime() {
  dtElement.innerHTML = getCurrentDateTime();
}

setInterval(() => {
  dtElement.innerHTML = getCurrentDateTime();
}, 1000);

function isEmpty(field) {
  return (field == null || field === "")
}



