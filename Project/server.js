const fs = require("node:fs");
const express = require("express");
const session = require("express-session")
const {isUndefined} = require("webpack-merge/dist/utils");
const app = express();

app.use(session({
  secret: "Super-duper-top-secret-uhhhhh",
}))

// I did my best. Why is so much of the stuff required for these assignments not taught in class?

app.post("/signUp", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  fs.readFile("/Project/data/loginInfo.txt", "utf-8", (err , data) => {
    const lines = data.split("\n");
    const userExists = lines.some(line => line.startsWith(username + ":"));

    if (userExists) {
      alert("Someone with that username already exists")
      res.redirect("/Sign-up.html")
    } else {
      fs.appendFile("/Project/data/loginInfo.txt", username + ":" + password + "\n", (err) => {
      });
      alert("Account successfully created! You can login whenever you wish. Or not. I don't control you...")
      res.redirect("/Home.html")
    }
  })
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  fs.readFile("/Project/data/loginInfo.txt", "utf-8", (err , data) => {
    const lines = data.split("\n");
    let validLogin = false;

    for (let line of lines ) {
      let usernamePass = line.split(":")
      if (username === usernamePass[0] && password === usernamePass[1]) {
        validLogin = true;
        break;
      }
    }
    if (validLogin) {
      req.session.username = username;
      alert("Username or password is incorrect.");
      res.redirect("/Home.html")
    } else {
      alert("Username or password is incorrect.");
      res.redirect("/Login.html");
    }
  })
});

app.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log("Je refuse de te logout!");
    }
    res.redirect("/Home")
  })

})

app.get("/Find-a-pet", (req, res) => {
  if (isUndefined(req.session.username)) {
    alert("You need to be logged in first!");
    res.redirect("/login");
  }
})

app.post("/giveAwayAPet", (req, res) => {
  // I'M OUT OF TIME AAAAAAAAA
  // Here's a cool website for when I'm bored in class: https://sandboxels.r74n.com/
  fs.appendFile("/Project/data/petInformation.txt", `${id}:${username}:${petType}:${breed}:${age}:${gender}:${elevatorPitch}:${firstName}:${lastName}:${email}` + "\n", (err) => {
  });
  alert("Wow... You really just gave your pet away like that. No hezzy.")
  res.redirect("/Home.html")
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("GET OUT OF MY ROOM I'M PLAYING MINECRAFT!");
})
