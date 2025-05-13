// const express = require("express");
// const app = express();
// const path = require('path');
//
// app.get("/", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "./Contacts-Form.html")
//   );
// })
//
// const PORT = 3003;
// app.listen(PORT, () => {
//   console.log("GET OUT OF MY ROOM I'M PLAYING MINECRAFT!");
// })

function validateNumberForm() {
  let phoneNumber = document.forms["contactForm"]["phoneNumber"].value.trim();
  let resultMsg = document.getElementById("resultMsg");
  if (/\d{3}-\d{3}-\d{4}/.test(phoneNumber)) {
    resultMsg.innerHTML = "Phone number submitted ✅"
    return true;
  } else {
    alert("Invalid phone number");
    return false;
  }
}
